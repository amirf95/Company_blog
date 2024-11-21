import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { tasksSchema } from './entities/task.entity';
import { projectSchema } from 'src/projects/entities/project.entity';
import { userSchema } from 'src/users/entities/user.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"tasks",schema:tasksSchema}]),
  MongooseModule.forFeature([{name:"projects",schema:projectSchema}]),
  MongooseModule.forFeature([{name:"users",schema:userSchema}])],

  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
