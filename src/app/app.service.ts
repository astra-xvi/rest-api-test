import { Injectable } from '@nestjs/common';
import { Str } from '@supercharge/strings/dist';
import { PrismaService } from 'src/prisma/prisma.service';
import { TestInterface } from './interface/app.interface';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) { }

  async createRecord(record: string | any): Promise<TestInterface> {
    // save record to db
    await this.prismaService.record.create({
      data: {
        owner: record.owner,
        name: record.name,
        company: record.company,
      },
    });

    //shuffle payload
    const payload = {
      owner: parseInt(Str(record.owner).shuffle().get()),
      name: Str(record.name).shuffle().get(),
      company: Str(record.company).shuffle().get(),
    };

    return payload;
  }
}
