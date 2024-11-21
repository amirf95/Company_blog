import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { response } from 'express';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto , @Res() response) {
  try {
  
  const newtask=await this.tasksService.create(createTaskDto)
  return response.status(HttpStatus.CREATED).json({ 
    message :"task  created successfully",
   status:HttpStatus.CREATED,
 data:newtask})
  } catch (error) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null
    })

   }
  }
  @Get("/user/:user")
  async finduserbyEmail(@Param('user') user:string ,@Res() response){
    try {
      const taskbyuser=await this.tasksService.findtaskbyUser(user)
      return response.status(HttpStatus.OK).json({
        message :"Users data found",
        status:HttpStatus.OK,
        data:taskbyuser


      })
      
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
  }
  @Get()
  async findAll(@Res() response) {
    try {
      const tasksData=await this.tasksService.findAll()
      return response.status(HttpStatus.OK).json({
        message :"tasks data found",
        status:HttpStatus.OK,
        data:tasksData


      })
      
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string,@Res() response) {
    try {
      const onetask=await this.tasksService.findOne(id)
      return response.status(HttpStatus.OK).json({
        message :"task found succefuly by id",
        status:HttpStatus.OK,
        data:onetask
    })
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
  }

  @Patch(':id')
 async  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto,@Res() response) {
  try {
    
    const updatetask = await this.tasksService.update(id, updateTaskDto);
    return response.status(HttpStatus.OK).json({
      message: "task updated successfully",
      status: HttpStatus.OK,
      data: updatetask
    });
  } catch (error) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: error.message,
      status: HttpStatus.BAD_REQUEST,
      data: null
    });
  }
  }

  @Delete(':id')
 async  remove(@Param('id') id: string,@Res() response) {
  try {
    const deletedtask = await this.tasksService.remove(id);
    return response.status(HttpStatus.OK).json({
      message: "task deleted successfully",
      status: HttpStatus.OK,
      data: deletedtask
    });
  } catch (error) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      message: error.message,
      status: HttpStatus.BAD_REQUEST,
      data: null
    });
  }
}
}
