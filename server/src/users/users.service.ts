import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {AuthUserDto} from "./dto/auth.user.dto";
import {InjectModel} from '@nestjs/sequelize'
import {User} from "./users.model";
import {Post} from "../posts/posts.model";
import {PostLike} from "../posts/posts.likes.model";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async create(dto: CreateUserDto): Promise<User>{
        return await this.userRepository.create(dto);
    }

    async getUser(userId: number){
        return await this.userRepository.findOne({where: {id: userId},
                                                         include: [{model: Post,
                                                                    separate: true,
                                                                    order: [['id', 'DESC']],
                                                                    include: [{model: PostLike,
                                                                               attributes: ['id'],
                                                                               include: [{model: User, attributes: ['login']}]}]}],
                                                         attributes: ['id', 'first_name', 'last_name', 'avatar_src', 'login']})
    }

    async auth(dto: AuthUserDto): Promise<boolean>{
        const user = await this.userRepository.findOne({where: {login: dto.login, password: dto.password}})
        return !!user;
    }

}
