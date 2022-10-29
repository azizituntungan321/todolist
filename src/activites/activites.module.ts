import { Module } from '@nestjs/common';
import { ActivitesService } from './activites.service';
import { ActivitesController } from './activites.controller';
import { ActivitesEntity } from './entity/activites.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActivitesEntity])],
  providers: [ActivitesService],
  controllers: [ActivitesController]
})
export class ActivitesModule {}
