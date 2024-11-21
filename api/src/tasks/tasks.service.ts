import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITasks } from './interface/tasks.interface';
import { IProject } from 'src/projects/interface/project.interface';
import { IUser } from 'src/users/interface/user.interface';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('tasks')
    private taskModel:Model<ITasks>,
    @InjectModel("projects")
    private projectModel:Model<IProject>,
    @InjectModel("users")
    private userModel:Model<IUser>
 

  ){}
  async create(createTaskDto: CreateTaskDto):Promise<ITasks> {
    const newtask=new this.taskModel(createTaskDto)
    await this.projectModel.updateOne({_id:createTaskDto.project},
      {$push :{tasks : newtask._id }}
    )
    await this.userModel.updateOne({_id:createTaskDto.user},
      {$push :{task : newtask._id }}
    )
    return await newtask.save()
  }

  async findAll(): Promise <ITasks[]> {
    const projectData =await this.taskModel.find().populate("project").populate("user").exec();
    if(!projectData || projectData.length===0){
      throw new NotFoundException("tasks data does not found")
  }
  return projectData
  }

 async findOne(id: string): Promise <ITasks> {
    const onetask=await this.taskModel.findById(id).populate("project").exec()
  if(!onetask)
  {
    throw new NotFoundException("tasks dones not exist with id")
  }
  return onetask
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<ITasks> {
    const updateProject = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
    if (!updateProject) {
      throw new NotFoundException("task does not exist with this ID");
    }
    return updateProject;
  }

  async remove(id: string)  : Promise<ITasks>{
    const removetask = await this.taskModel.findByIdAndDelete(id);
    if (!removetask) {
      throw new NotFoundException("task does not exist with this ID");
    }
    await this.taskModel.updateOne({_id:removetask.project},{$pull:{tasks:removetask._id}})
    await this.taskModel.updateOne({_id:removetask.user},{$pull : {permission:removetask._id}})
    return removetask;
  }
  async findtaskbyUser(user:string):Promise<ITasks[]>{
    const tasksbyuser=await this.taskModel.find({user:user}).populate("project").exec()
    if(!tasksbyuser)
    {
      throw new NotFoundException("task not found with this user")
    }
    return tasksbyuser
  }
}
