import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/user-entity';
import { Repository } from 'typeorm';
import { UpdatePatchUsuarioDTO } from './dto/update-patch-user.dto';
import { UpdatePutUsuarioDTO } from './dto/update-put-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}
  
  async create(createUsuarioDTO: CreateUserDTO) {
    if (
      await this.usuarioRepository.exist({
        where: {
          email: createUsuarioDTO.email,
        },
      })
    ) {
      throw new BadRequestException('E-mail já cadastrado');
    }

    const salt = await bcrypt.genSalt();

    createUsuarioDTO.senha = await bcrypt.hash(createUsuarioDTO.senha, salt);
    return this.usuarioRepository.save(createUsuarioDTO);
  }

  update(id: number, updatePutUsuarioDto: UpdatePutUsuarioDTO) {
    return this.usuarioRepository.update(id, updatePutUsuarioDto);
  }

  updateParcial(id: number, updatePatchUsuarioDto: UpdatePatchUsuarioDTO) {
    return this.usuarioRepository.update(id, updatePatchUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({ id: id });
  }

  remove(id: number) {
    return this.usuarioRepository.delete(id);
  }
}
