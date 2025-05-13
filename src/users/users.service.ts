import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { type Prisma, type User } from 'generated/prisma';
import { FindUserDto } from './dto/find-user.dto';
import { excludeFields } from 'src/utils/exclude-fields';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private excludePassword(user: User): FindUserDto {
    return excludeFields(user, 'password');
  }

  async create(userCreateInput: Prisma.UserCreateInput): Promise<FindUserDto> {
    const user = await this.prisma.user.create({
      data: userCreateInput,
    });
    return this.excludePassword(user);
  }

  async findAll(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<FindUserDto[]> {
    const users = await this.prisma.user.findMany(params);
    return users.map((user) => this.excludePassword(user));
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<FindUserDto> {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: userWhereUniqueInput,
    });
    return this.excludePassword(user);
  }

  async update(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    userUpdateInput: Prisma.UserUpdateInput,
  ): Promise<FindUserDto> {
    const user = await this.prisma.user.update({
      where: userWhereUniqueInput,
      data: userUpdateInput,
    });
    return this.excludePassword(user);
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<FindUserDto> {
    const user = await this.prisma.user.delete({
      where,
    });
    return this.excludePassword(user);
  }
}
