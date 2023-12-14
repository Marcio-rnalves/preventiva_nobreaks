import { IsEmail, IsEnum, IsStrongPassword } from "class-validator";
import { Role } from "src/enums/role.enum";


export class AuthLoginDTO {
    
    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 4,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0,
        minLowercase: 0
    })
    senha: string;

    @IsEnum(Role)
    role: Role
    
}