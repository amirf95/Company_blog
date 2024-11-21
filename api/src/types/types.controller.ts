import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { response } from 'express';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
 async  create(@Body() createTypeDto: CreateTypeDto,@Res()response) {
  try {
  
    const newtype=await this.typesService.create(createTypeDto)
    return response.status(HttpStatus.CREATED).json({ 
      message :"type  created successfully",
     status:HttpStatus.CREATED,
   data:newtype})
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
      const typeData=await this.typesService.findAll()
      return response.status(HttpStatus.OK).json({
        message :"types data found",
        status:HttpStatus.OK,
        data:typeData


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
      const onetype=await this.typesService.findOne(id)
      return response.status(HttpStatus.OK).json({
        message :"type found succefuly by id",
        status:HttpStatus.OK,
        data:onetype
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
  async update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto,@Res() response) {
    try {
    
      const updatetype = await this.typesService.update(id, updateTypeDto);
      return response.status(HttpStatus.OK).json({
        message: "type updated successfully",
        status: HttpStatus.OK,
        data: updatetype
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
  async remove(@Param('id') id: string) {
    try {
      const deletedtype = await this.typesService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: "type deleted successfully",
        status: HttpStatus.OK,
        data: deletedtype
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
