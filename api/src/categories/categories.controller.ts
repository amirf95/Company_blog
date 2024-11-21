import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { response } from 'express';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto,@Res() response) {
    try {
      const newCategorie=await this.categoriesService.create(createCategoryDto)
      return response.status(HttpStatus.CREATED).json({ 
        message :"User created successfully",
       status:HttpStatus.CREATED,
     data:newCategorie})
    
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
  async findAll(@Res() response) {
    try {
      const usersData=await this.categoriesService.findAll()
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

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const oneuser=await this.categoriesService.findOne(id)
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
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto, @Res() response) {
    try {
      const updatedUser = await this.categoriesService.update(id, updateCategoryDto);
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
  async remove(@Param('id') id: string , @Res() response) {
    try {
      const deletedUser = await this.categoriesService.remove(id);
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
