import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { category } from 'src/categories/entities/category.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}


  @UseInterceptors(
    FileInterceptor("file",{
    storage:diskStorage({
      destination:"./upload/projects",
      filename:(_request, file, callback)=>
         callback(null,`${new Date().getTime()}-${file.originalname}`)
        
      
  
    })
  })
  )
  @Post()
  async create(@Body() createProjectDto: CreateProjectDto ,@Res() response,
@UploadedFile() file : Express.Multer.File
) {
    try {
    createProjectDto.file=file?.filename
  const newproject=await this.projectsService.create(createProjectDto)
  return response.status(HttpStatus.CREATED).json({ 
    message :"categorie  created successfully",
   status:HttpStatus.CREATED,
 data:newproject})

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
      const projectsData=await this.projectsService.findAll()
      return response.status(HttpStatus.OK).json({
        message :"projects data found",
        status:HttpStatus.OK,
        data:projectsData


      })
      
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
  }
  @Get("/category/:category")
  async findprojectbycategory(@Param('categories') category:string ,@Res() response){
    try {
      const projectbycategory=await this.projectsService.findprojectbycategory(category)
      return response.status(HttpStatus.OK).json({
        message :"Users data found",
        status:HttpStatus.OK,
        data:projectbycategory


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
      const oneproject=await this.projectsService.findOne(id)
      return response.status(HttpStatus.OK).json({
        message :"project found succefuly by id",
        status:HttpStatus.OK,
        data:oneproject
    })
    } catch (error) { 
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }
  }
  @UseInterceptors(
    FileInterceptor("file",{
    storage:diskStorage({
      destination:"./upload/projects",
      filename:(_request, file, callback)=>
         callback(null,`${new Date().getTime()}-${file.originalname}`)
        
      
  
    })
  })
  )
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateprojectDto: UpdateProjectDto, @Res() response, @UploadedFile() file:Express.Multer.File) {
    try {
      updateprojectDto.file=file?.filename
      const updateProject = await this.projectsService.update(id, updateprojectDto);
      return response.status(HttpStatus.OK).json({
        message: "project updated successfully",
        status: HttpStatus.OK,
        data: updateProject
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
      const deletedproject = await this.projectsService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: "project deleted successfully",
        status: HttpStatus.OK,
        data: deletedproject
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
