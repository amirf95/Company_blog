import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Ipermission } from './interface/permissions.interface';
import { Model } from 'mongoose';
import { Itypes } from 'src/types/interface/types.interface';
import { IUser } from 'src/users/interface/user.interface';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel('permissions ')
    private permissionModel:Model<Ipermission>,
    @InjectModel("types")
    private typeModel:Model<Itypes>,
    @InjectModel("users")
    private userModel:Model<IUser>
  ){}
  async create(createPermissionDto: CreatePermissionDto):Promise <Ipermission> {
    const newper=new this.permissionModel(createPermissionDto)
    await this.typeModel.updateOne({_id:createPermissionDto.type},
      {$push :{permission : newper._id }}
    )
    await this.userModel.updateOne({_id:createPermissionDto.user},
      {$push :{permission : newper._id }}
    )
    return await newper.save()
  }

  async findAll():Promise <Ipermission[]> {
    const usersper =await this.permissionModel.find().populate("user").populate("type").exec()
    if(!usersper || usersper.length===0){
      throw new NotFoundException("permissions data does not found")
  }
  return usersper
  }

  async findOne(id: string):Promise <Ipermission> {
    const oneper=await this.permissionModel.findById(id).populate("user").populate("type").exec()
    if(!oneper)
    {
      throw new NotFoundException("permission dones not exist with id")
    }
    return oneper
  }

 async  update(id: string, updatePermissionDto: UpdatePermissionDto):Promise<Ipermission> {
  const updatedper = await this.permissionModel.findByIdAndUpdate(id, updatePermissionDto, { new: true });
  if (!updatedper) {
    throw new NotFoundException("permission does not exist with this ID");
  }
  return updatedper;
  }

  async remove(id: string):Promise<Ipermission> {
    const removepermission = await this.permissionModel.findByIdAndDelete(id);
    if (!removepermission) {
      throw new NotFoundException("permission does not exist with this ID");
    }
    await this.permissionModel.updateOne({_id:removepermission.type},{$pull : {permission:removepermission._id}})
    return removepermission;
  }
  async findpermissionbyUser(user:string):Promise<Ipermission[]>{
    const permissionbyuser=await this.permissionModel.find({user:user}).populate("type")
    if(!permissionbyuser)
    {
      throw new NotFoundException("permission not found with this email")
    }
    return permissionbyuser
  }
}
