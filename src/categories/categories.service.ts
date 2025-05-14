import { Injectable } from '@nestjs/common';
import { Category, Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(
    categoryCreateInput: Prisma.CategoryCreateInput,
  ): Promise<Category> {
    const category = await this.prisma.category.create({
      data: categoryCreateInput,
    });

    return category;
  }

  async findAll(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<Category[]> {
    const categories = await this.prisma.category.findMany(params);

    return categories;
  }

  async findOne(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category> {
    const category = await this.prisma.category.findUniqueOrThrow({
      where: categoryWhereUniqueInput,
    });

    return category;
  }

  async update(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
    categoryUpdateInput: Prisma.CategoryUpdateInput,
  ): Promise<Category> {
    const category = await this.prisma.category.update({
      where: categoryWhereUniqueInput,
      data: categoryUpdateInput,
    });

    return category;
  }

  async remove(where: Prisma.CategoryWhereUniqueInput): Promise<Category> {
    const category = await this.prisma.category.delete({
      where,
    });

    return category;
  }
}
