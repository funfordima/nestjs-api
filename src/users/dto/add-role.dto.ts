import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'New user role value'})
  @IsString({ message: 'String type is required!'})
  readonly roleValue: string;

  @ApiProperty({ example: '123', description: 'User Id'})
  @IsNumber({}, { message: 'Number type is required!'})
  readonly userId: number;
}
