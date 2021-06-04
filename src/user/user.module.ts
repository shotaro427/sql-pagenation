import { HttpModule, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [HttpModule],
  providers: [UserService, PrismaService],
})
export class UserModule {}
