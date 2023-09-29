import { IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
    minLowercase: 1,
  })
  senha: string;
}
