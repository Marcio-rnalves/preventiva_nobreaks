import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/user-entity';
import { Repository } from 'typeorm';
import { UpdatePatchUsuarioDTO } from './dto/update-patch-user.dto';
import { UpdatePutUsuarioDTO } from './dto/update-put-user.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  create(CreateUsuarioDTO: CreateUserDTO) {
    return this.usuarioRepository.save(CreateUsuarioDTO);
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
