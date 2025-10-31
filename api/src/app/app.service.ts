import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@condo-app/db-schema';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getUserList = async (): Promise<User[]> => {
    return this.prisma.user.findMany();
  };
}
