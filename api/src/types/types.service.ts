import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itypes } from './interface/types.interface';

@Injectable()
export class TypesService {
  constructor(
@InjectModel('types')
private typeModel:Model<Itypes>

  ){}
   async create(createTypeDto: CreateTypeDto): Promise<Itypes> {
    const newtype=new this.typeModel(createTypeDto)
    return await newtype.save()
  }

  async findAll(): Promise <Itypes[]> {
   const typeData = await this.typeModel.find();
   if(!typeData || typeData.length===0){
    throw new NotFoundException("types data does not found")
  }
  return typeData
}

  async findOne(id: string): Promise <Itypes> {
  const onetype=await this.typeModel.findById(id)
  if (!onetype)
  {
    throw new NotFoundException("types dones not exist with id")
  }
  return onetype
  }

 async update(id: string, updateTypeDto: UpdateTypeDto) {
  const updatetype = await this.typeModel.findByIdAndUpdate(id, updateTypeDto, { new: true });
  if (!updatetype) {
    throw new NotFoundException("types does not exist with this ID");
  }
  return updatetype;
  }

  async remove(id: string) {
    const type = await this.typeModel.findByIdAndDelete(id);
    if (!type) {
      throw new NotFoundException("type does not exist with this ID");
    }
    
    return type;
  }
}
