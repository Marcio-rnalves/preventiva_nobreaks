import { Module, forwardRef } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UsuarioModule } from "src/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "src/user/entities/user-entity";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        JwtModule.register({
            secret: `preventiva`
        }),
        forwardRef(() => UsuarioModule),
        TypeOrmModule.forFeature([Usuario])
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {

}