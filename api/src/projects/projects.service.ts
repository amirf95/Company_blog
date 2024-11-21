import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProject } from './interface/project.interface';
import { IUcategorie } from 'src/categories/interface/categorie.interface';
import { Project } from './entities/project.entity';
import { category } from 'src/categories/entities/category.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('projects')
    private projectModel:Model<IProject>,
    @InjectModel("categories")
    private categoryModel:Model<IUcategorie>
    
  ){}
  async create(createprojectDto: CreateProjectDto) :Promise<IProject>{
    const newproject=new this.projectModel(createprojectDto)
    await this.categoryModel.updateOne({_id:createprojectDto.category},
      {$push :{projects : newproject._id }}
    )
    return await newproject.save()
    
  }

  async findAll() :Promise <IProject[]>  {
    const projectData =await this.projectModel.find().populate("category").exec();
    if(!projectData || projectData.length===0){
      throw new NotFoundException("projects data does not found")
  }
  return projectData
}

async findOne(id: string):Promise <IProject> {
  const oneProject=await this.projectModel.findById(id).populate("category").exec();
  if(!oneProject)
  {
    throw new NotFoundException("project dones not exist with id")
  }
  return oneProject
  }


  async update(id: string, updateprojectDto: UpdateProjectDto): Promise<IProject> {
    const updateProject = await this.projectModel.findByIdAndUpdate(id, updateprojectDto, { new: true });
    if (!updateProject) {
      throw new NotFoundException("project does not exist with this ID");
    }
    return updateProject;
  }

  async remove(id: string): Promise<IProject> {
    const removeproject = await this.projectModel.findByIdAndDelete(id);
    if (!removeproject) {
      throw new NotFoundException("project does not exist with this ID");
    }
    await this.categoryModel.updateOne({_id:removeproject.category},{$pull:{projects:removeproject._id}})
    return removeproject;
  }
  async findprojectbycategory(category:string):Promise<IProject[]>{
    const projectbycategory=await this.projectModel.find({category:category})
    if(!projectbycategory)
    {
      throw new NotFoundException("project not found with this category")
    }
    return projectbycategory
  }
}
