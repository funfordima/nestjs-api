import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private readonly roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto): Promise<Role> {
    const role = this.roleRepository.create(dto);

    return role;
  }

  async getRoleByValue(value: string): Promise<Role> {
    const role = this.roleRepository.findOne({ where: { value }});

    return role;
  }
}
