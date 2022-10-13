import { CreateUserDto } from "./dto/create.user.dto";
import { AuthUserDto } from "./dto/auth.user.dto";
import { User } from "./users.model";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    create(dto: CreateUserDto): Promise<User>;
    getUser(userId: number): Promise<User>;
    auth(dto: AuthUserDto): Promise<boolean>;
}
