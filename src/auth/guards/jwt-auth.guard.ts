import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const request = context.switchToHttp().getRequest();

    try {
      const authHeader = request.headers.authorization;
      const [bearer, token] = authHeader.split(' ');
      
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User is not authorized!' });
      }

      const user = this.jwtService.verify(token);
      request.user = user;

      return true;
    } catch (err) {
      throw new UnauthorizedException({ message: 'User is not authorized!' });
    }
  }
}
