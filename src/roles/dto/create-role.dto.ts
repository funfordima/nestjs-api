import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'User role, default "USER"'})
  readonly value: string;

  @ApiProperty({ example: 'default user role', description: 'User role description'})
  readonly description: string;
}
