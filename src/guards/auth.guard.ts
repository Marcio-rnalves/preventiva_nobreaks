import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { request } from "http";
import { AuthService } from "src/auth/auth.service";
import { ROLES_KEY } from "src/decorators/roles.decorator";
import { UsuarioService } from "src/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly authService: AuthService,
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService,
        private reflector: Reflector
    ){}

    async canActivate(context: ExecutionContext){

        const requireRoles = this.reflector.getAllAndOverride(ROLES_KEY, [context.getHandler(), context.getClass()])

        if(!requireRoles){
            return true
        }

       const { authorization } = context.switchToHttp().getRequest().headers;
         
       const loginPayload = await this.jwtService.verifyAsync(authorization, {secret: `preventiva`})

        if(!loginPayload){
            return false
        }

        return requireRoles.some((role)=> role === loginPayload.role)
    }
}