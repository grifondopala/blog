import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {AuthUserDto} from "./dto/auth.user.dto";
import {InjectModel} from '@nestjs/sequelize'
import {User} from "./users.model";
import {Post} from "../posts/posts.model";
import {PostLike} from "../posts/posts.likes.model";
import {Comment} from "../comments/comments.model";
import {CommentLike} from "../comments/comments.likes";
import {MakeFriendDto} from "./dto/make.friend.dto";
import {Friends} from "./friends.model";
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                @InjectModel(Friends) private friendsRepository: typeof Friends) {}

    async create(dto: CreateUserDto): Promise<User>{
        return await this.userRepository.create(dto);
    }

    async getUser(userId: number) {
        return await this.userRepository.findOne({
            where: {id: userId},
            include: [{
                model: Post,
                separate: true,
                order: [['id', 'DESC']],
                include: [{
                    model: PostLike,
                    attributes: ['id'],
                    include: [{model: User, attributes: ['login']}]
                },
                    {
                        model: Comment,
                        attributes: ['id', 'createdAt', 'text'],
                        separate: true,
                        order: [['id', 'ASC']],
                        include: [
                            {model: User, attributes: ['first_name', 'last_name', 'avatar_src', 'id']},
                            {model: CommentLike, attributes: ['id'], include: [{model: User, attributes: ['login']}]}
                        ]
                    }]
            },
            ],
            attributes: ['id', 'first_name', 'last_name', 'avatar_src', 'login']
        })
    }

    async makeFriend(dto: MakeFriendDto){
        const user = await this.userRepository.findOne({where: {login: dto.login}})
        await this.friendsRepository.create({userFirstId: user.id, userSecondId: dto.idFriend})
    }

    async auth(dto: AuthUserDto): Promise<boolean>{
        const user = await this.userRepository.findOne({where: {login: dto.login, password: dto.password}})
        return !!user;
    }

    async getAllFriends(userId: number) {
        const friends = await this.friendsRepository.findAll({where:Sequelize.or({userSecondId: userId}, {userFirstId: userId})})
        let friendsList = {friends: []}
        for (const element of friends) {
            let index = element.userFirstId.toString() === userId.toString() ? element.userSecondId : element.userFirstId;
            const user = await this.userRepository.findOne({where: {id: index}, attributes: ['id', 'first_name', 'last_name', 'avatar_src']})
            friendsList.friends.push(user);
        }
        return friendsList;
    }
}
