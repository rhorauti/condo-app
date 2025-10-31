import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@condo-app/db-schema';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
