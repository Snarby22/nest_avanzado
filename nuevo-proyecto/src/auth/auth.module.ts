import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { LocalStrategyService } from './local-strategy/local-strategy.service';

@Module({
  providers: [AuthService, UsersService, LocalStrategyService]
})
export class AuthModule {}
