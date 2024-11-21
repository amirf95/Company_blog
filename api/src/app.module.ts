import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { TypesModule } from './types/types.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AdminsModule } from './admins/admins.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
//Connextion database
  imports: [MongooseModule.forRoot('mongodb://localhost:27017',{dbName:"pfa2024"}),UsersModule, CategoriesModule, ProjectsModule, TasksModule, TypesModule, PermissionsModule, AdminsModule, EmployeesModule, AuthModule
    ,ConfigModule.forRoot({isGlobal:true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
