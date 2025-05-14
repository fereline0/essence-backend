import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { BuildsModule } from './builds/builds.module';

@Module({
  imports: [UsersModule, CategoriesModule, BuildsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
