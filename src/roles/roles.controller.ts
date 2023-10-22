import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}
  
  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  createRole(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getRoleByValue(@Param('value') value: string): Promise<Role> {
    return this.roleService.getRoleByValue(value);
  }
}
