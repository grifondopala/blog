import { CreateUserDto } from "./dto/create.user.dto";
import { UsersService } from "./users.service";
import { AuthUserDto } from "./dto/auth.user.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    Create(dto: CreateUserDto): Promise<import("./users.model").User>;
    Auth(dto: AuthUserDto): Promise<boolean>;
    GetUser(userId: any): Promise<import("./users.model").User>;
}
