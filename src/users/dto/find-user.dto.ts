import { User } from 'generated/prisma';

export type FindUserDto = Omit<User, 'password'>;
