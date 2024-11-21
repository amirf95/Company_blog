import { Controller, Get, Post, Body, Patch, Param, Delete, Catch, HttpStatus, Res, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
 async create(@Body() createUserDto: CreateUserDto ,@Res() response) {
     try {
   const newUser=await this.usersService.create(createUserDto)
   return response.status(HttpStatus.CREATED).json({ 
     message :"categorie  created successfully",
    status:HttpStatus.CREATED,
  data:newUser})
 
     }catch(error)
     {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })

     }
     

    

  }

  @Get()
   async findAll(@Res() response ) {
    try {
      const usersData=await this.usersService.findAll()
      return response.status(HttpStatus.OK).json({
        message :"Users data found",
        status:HttpStatus.OK,
        data:usersData


      })
      
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
    
  }
  @Get("/role")
  async finduserByrole(@Query("role") role:string ,@Res() response){

    try {
      const usersbyrole=await this.usersService.findUserByRole(role)
      return response.status(HttpStatus.OK).json({
        message :"Users data found",
        status:HttpStatus.OK,
        data:usersbyrole


      })
      
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
  }
  @Get("/email/:email")
  async finduserbyEmail(@Param('email') email:string ,@Res() response){
    try {
      const usersbyemail=await this.usersService.findUserByEmail(email)
      return response.status(HttpStatus.OK).json({
        message :"Users data found",
        status:HttpStatus.OK,
        data:usersbyemail


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
   async findOne(@Param('id') id: string  ,@Res() response) {
    try {
      const oneuser=await this.usersService.findOne(id)
      return response.status(HttpStatus.OK).json({
        message :"User found succefuly by id",
        status:HttpStatus.OK,
        data:oneuser
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
async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() response) {
  try {
    const updatedUser = await this.usersService.update(id, updateUserDto);
    return response.status(HttpStatus.OK).json({
      message: "User updated successfully",
      status: HttpStatus.OK,
      data: updatedUser
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
  async remove(@Param('id') id: string, @Res() response) {
    try {
      const deletedUser = await this.usersService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: "User deleted successfully",
        status: HttpStatus.OK,
        data: deletedUser
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
