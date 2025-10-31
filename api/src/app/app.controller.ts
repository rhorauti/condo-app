import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@condo-app/db-schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.appService.getUserList();
  }
}
