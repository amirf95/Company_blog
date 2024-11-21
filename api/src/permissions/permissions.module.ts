import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionSchema } from './entities/permission.entity';
import { typeSchema } from 'src/types/entities/type.entity';
import { userSchema } from 'src/users/entities/user.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"permissions ",schema:PermissionSchema}]),
  MongooseModule.forFeature([{name:"types",schema:typeSchema}]),
  MongooseModule.forFeature([{name:"users",schema:userSchema}])],

  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
