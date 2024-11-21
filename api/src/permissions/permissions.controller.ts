import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { response } from 'express';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
 async create(@Body() createPermissionDto: CreatePermissionDto,@Res() response) {
  try {
    const newpermission=await this.permissionsService.create(createPermissionDto)
    return response.status(HttpStatus.CREATED).json({ 
      message :"categorie  created successfully",
     status:HttpStatus.CREATED,
   data:newpermission})
  
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
      const permissiondata=await this.permissionsService.findAll()
      return response.status(HttpStatus.OK).json({
        message :"Users data found",
        status:HttpStatus.OK,
        data:permissiondata


      })
      
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
  }
  @Get("/user/:user")
  async findpermissionbyUser(@Param('user') user:string ,@Res() response){
    try {
      const permissionbyuser=await this.permissionsService.findpermissionbyUser(user)
      return response.status(HttpStatus.OK).json({
        message :"permission found by user ",
        status:HttpStatus.OK,
        data:permissionbyuser


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
  async findOne(@Param('id') id: string) {
    try {
      const oneuser=await this.permissionsService.findOne(id)
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
 async update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto,@Res() response) {
  try {
    const updatedper = await this.permissionsService.update(id, updatePermissionDto);
    return response.status(HttpStatus.OK).json({
      message: "User updated successfully",
      status: HttpStatus.OK,
      data: updatedper
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
    const deletedPer = await this.permissionsService.remove(id);
    return response.status(HttpStatus.OK).json({
      message: "User deleted successfully",
      status: HttpStatus.OK,
      data: deletedPer
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
