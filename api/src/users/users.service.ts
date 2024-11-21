import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interface/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users')
    private userModel:Model<IUser>
    
  ){}
   async create(createUserDto: CreateUserDto) :Promise<IUser>{
    const newUser=new this.userModel(createUserDto)
    return await newUser.save()
    
  }

 async findAll() :Promise <IUser[]>  {
    const usersData =await this.userModel.find();
    if(!usersData || usersData.length===0){
      throw new NotFoundException("users data does not found")
  }
  return usersData
}

   async findOne(id: string):Promise <IUser> {
  const oneuser=await this.userModel.findById(id)
  if(!oneuser)
  {
    throw new NotFoundException("user dones not exist with id")
  }
  return oneuser
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    if (!updatedUser) {
      throw new NotFoundException("User does not exist with this ID");
    }
    return updatedUser;
  }
  

  async remove(id: string): Promise<IUser> {
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) {
      throw new NotFoundException("User does not exist with this ID");
    }
    return user;
  }
  async findUserByRole(role :string):Promise<IUser[]>{
    const usersbyrole=await this.userModel.find({role:role})
    if(!usersbyrole)
    {
      throw new NotFoundException("users dont found with this role")
    }
    return usersbyrole
  }
  async findUserByEmail(email:string):Promise<IUser>{
    const usersbyemail=await this.userModel.findOne({email:email})
    if(!usersbyemail)
    {
      throw new NotFoundException("users dont found with this email")
    }
    return usersbyemail
  }
  
}
