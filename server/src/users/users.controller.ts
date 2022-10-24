import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {UsersService} from "./users.service"
import {AuthUserDto} from "./dto/auth.user.dto";

@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService) {}

    @Post('/create')
    Create(@Body() dto: CreateUserDto){
        return this.usersService.create(dto);
    }

    @Post('/auth')
    Auth(@Body() dto: AuthUserDto){
        return this.usersService.auth(dto);
    }

    @Get('/:userId')
    GetUser(@Param('userId') userId){
        return this.usersService.getUser(userId);
    }

}
