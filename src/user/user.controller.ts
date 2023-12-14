import { Controller,Post,Body,Get,Param,Put,Patch,Delete,ParseIntPipe, UseGuards,} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUsuarioDTO } from './dto/update-put-user.dto';
import { UpdatePatchUsuarioDTO } from './dto/update-patch-user.dto';
import { UsuarioService } from './user.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Roles(Role.User)
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criar(@Body() createUsuarioDto: CreateUserDTO) {
    return this.usuarioService.create(createUsuarioDto);
  }

 
  @Get()
  async listarTodos() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async listarUm(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Put(':id')
  async update(
    @Body() updatePutUsuarioDto: UpdatePutUsuarioDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usuarioService.update(id, updatePutUsuarioDto);
  }

  @Patch(':id')
  async updateParcial(
    @Body() updatePatchUsuarioDto: UpdatePatchUsuarioDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.usuarioService.updateParcial(id, updatePatchUsuarioDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.remove(id);
  }
}
