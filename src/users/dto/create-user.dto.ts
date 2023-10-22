import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test-user-mailbox@test.com', description: 'User email'})
  @IsString({ message: 'String type is required!'})
  @IsEmail({}, { message: 'Email is not correct.'})
  readonly email: string;

  @ApiProperty({ example: 'qwerty123', description: 'User password'})
  @IsString({ message: 'String type is required!'})
  @Length(4, 16, { message: 'Password must be greater that 4 symbols and less then 12.' })
  readonly password: string;
}
