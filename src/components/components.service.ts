import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Component, Prisma } from 'generated/prisma';

@Injectable()
export class ComponentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ComponentCreateInput): Promise<Component> {
    return this.prisma.component.create({ data });
  }

  async findAll(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ComponentWhereUniqueInput;
    where?: Prisma.ComponentWhereInput;
    orderBy?: Prisma.ComponentOrderByWithRelationInput;
  }): Promise<Component[]> {
    return this.prisma.component.findMany(params);
  }

  async findOne(where: Prisma.ComponentWhereUniqueInput): Promise<Component> {
    return this.prisma.component.findUniqueOrThrow({ where });
  }

  async update(params: {
    where: Prisma.ComponentWhereUniqueInput;
    data: Prisma.ComponentUpdateInput;
  }): Promise<Component> {
    const { where, data } = params;
    return this.prisma.component.update({ where, data });
  }

  async remove(where: Prisma.ComponentWhereUniqueInput): Promise<Component> {
    return this.prisma.component.delete({ where });
  }
}
