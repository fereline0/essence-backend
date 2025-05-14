import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Build, Prisma } from 'generated/prisma';

@Injectable()
export class BuildsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.BuildCreateInput): Promise<Build> {
    return this.prisma.build.create({ data });
  }

  async findAll(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BuildWhereUniqueInput;
    where?: Prisma.BuildWhereInput;
    orderBy?: Prisma.BuildOrderByWithRelationInput;
  }): Promise<Build[]> {
    return this.prisma.build.findMany(params);
  }

  async findOne(where: Prisma.BuildWhereUniqueInput): Promise<Build> {
    return this.prisma.build.findUniqueOrThrow({ where });
  }

  async update(params: {
    where: Prisma.BuildWhereUniqueInput;
    data: Prisma.BuildUpdateInput;
  }): Promise<Build> {
    const { where, data } = params;
    return this.prisma.build.update({ where, data });
  }

  async remove(where: Prisma.BuildWhereUniqueInput): Promise<Build> {
    return this.prisma.build.delete({ where });
  }
}
