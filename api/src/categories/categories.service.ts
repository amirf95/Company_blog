import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUcategorie } from './interface/categorie.interface';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('categories')
    private CategorieModel:Model<IUcategorie>){}
  async create(createCategoryDto: CreateCategoryDto) : Promise<IUcategorie> {
    const newCategorie=new this.CategorieModel(createCategoryDto)
    return await newCategorie.save()
  }

 async findAll(): Promise <IUcategorie[]> {
    const usersData =await this.CategorieModel.find();
    if(!usersData || usersData.length===0){
      throw new NotFoundException("category data does not found")
  }
  return usersData
  }

   async findOne(id: string) {
    const onecategorie=await this.CategorieModel.findById(id)
  if(!onecategorie)
  {
    throw new NotFoundException("category does not exist with id")
  }
  return onecategorie
  }

 async update(id: string, updateCategoryDto: UpdateCategoryDto) : Promise<IUcategorie> {
  const updatedcategorie = await this.CategorieModel.findByIdAndUpdate(id, updateCategoryDto, { new: true });
  if (!updatedcategorie) {
    throw new NotFoundException("category does not exist with this ID");
  }
  return updatedcategorie;
  }

  async remove(id: string) : Promise <IUcategorie> {
    const categorie = await this.CategorieModel.findByIdAndDelete(id);
    if (!categorie) {
      throw new NotFoundException("category does not exist with this ID");
    }
    return categorie;
  }
  
}
