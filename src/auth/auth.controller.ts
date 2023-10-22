import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'Bearer token' })
  @Post('/login')
  login(@Body() dto: CreateUserDto): Promise<{ token: string }> {
    return this.authService.login(dto);
  }

  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({ status: 200, description: 'Bearer token' })
  @Post('/registration')
  registration(@Body() dto: CreateUserDto): Promise<{ token: string }> {
    return this.authService.registration(dto);
  }
}
