export class CreateUserDto{
    readonly login: string;
    readonly password: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly avatar_src: string;
}