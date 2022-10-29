import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivitesEntity } from './entity/activites.entity';
import { ActivitesTransformer } from './activites.transformer';

@Injectable()
export class ActivitesService {
    constructor(@InjectRepository(ActivitesEntity) private activitesRepository: Repository<ActivitesEntity>) { }

    async createActivites(activites: ActivitesEntity){
        return ActivitesTransformer.singleTransform(await this.activitesRepository.save(activites))
    }

    async getActivites(activity_group_id: string): Promise<ActivitesEntity[]> {
        let data = await this.activitesRepository.find()
        if (!data) {
            return null;
        }
        return data
    }

    async getActivite(id: number): Promise<ActivitesEntity> {
        let data = await this.activitesRepository.findOneBy({ id })
        if (!data) {
            return null;
        }
        return data
    }

    async updateActivites(id: number,activites: ActivitesEntity) {
        let data = await this.activitesRepository.update(id,activites)
        if (!data) {
            return null;
        }
        return await this.activitesRepository.findOneBy({ id })
    }

    async deleteActivites(activites: ActivitesEntity) {
        await this.activitesRepository.delete(activites);
        return null
    }
}
