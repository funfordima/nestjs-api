import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'New user role value'})
  readonly roleValue: string;

  @ApiProperty({ example: '123', description: 'User Id'})
  readonly userId: number;
}
