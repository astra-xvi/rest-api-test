import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:postgres@localhost:5432/mydb?schema=public',
        },
      },
    });
  }

  //   cleanDb() {
  //     return this.$transaction([
  //       this.bookmark.deleteMany(),
  //       this.user.deleteMany(),
  //     ]);
  //   }
}
