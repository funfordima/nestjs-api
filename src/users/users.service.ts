import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('USER');

    await user.$set('roles', [role.id]);
    user.roles = [role];

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll({ include: { all: true }});
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = this.userRepository.findOne({ where: { email }, include: { all: true }});

    return user;
  }

  async addRole(dto: AddRoleDto): Promise<AddRoleDto> {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.roleValue);

    if (role && user) {
      await user.$add('role', role.id);

      return dto;
    }

    throw new HttpException('User or role has not been found.', HttpStatus.NOT_FOUND);
  }

  async banUser(dto: BanUserDto): Promise<User> {
    const user = await this.userRepository.findByPk(dto.userId);

    if (!user) {
      throw new HttpException('User has not been found.', HttpStatus.NOT_FOUND);
    }

    user.banned = true;
    user.banReason = dto.banReason;

    await user.save();

    return user;
  }
}
