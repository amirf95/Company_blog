import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './entities/user.entity';
import { Admin, adminSchema } from 'src/admins/entity/admin.entity';
import { Employee, employeeSchema } from 'src/employees/entity/employee.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"users",schema:userSchema,discriminators:[{name:Admin.name,schema:adminSchema},{name:Employee.name,schema:employeeSchema}]}])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
