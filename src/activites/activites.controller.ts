import { Controller, Post, Body, Req, Get, Put, Delete,Param,Res, Query, Patch} from '@nestjs/common';
import { ActivitesEntity } from './entity/activites.entity';
import { ActivitesService } from './activites.service';
import { AppResponse } from 'src/response.base';

@Controller('activity-groups')
export class ActivitesController {
    constructor(private service: ActivitesService) { }

    @Get(':id')
    async get(@Res() res, @Param() params) {
        try {
            let data = await this.service.getActivite(params.id)
            if(!data){
                return AppResponse.notFound(res, "", "")
            }
            return AppResponse.ok(res, data, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Get()
    async getAll(@Res() res, @Req() req) {
        try {
            const id =  req.query.activity_group_id
            let data = await this.service.getActivites(id)
            if(!data.length){
                return AppResponse.notFound(res, "", "")
            }
            return AppResponse.ok(res, data, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Post()
    async create(@Res() res, @Body() activites: ActivitesEntity) {
        try {
            let data = await this.service.createActivites(activites)
            return AppResponse.ok(res, data, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Patch(':id')
    async update(@Res() res, @Body() activites: ActivitesEntity, @Param() params) {
        try {
            let check = await this.service.getActivites(params.id)
            if(!check){
                return AppResponse.notFound(res, "", "")
            }
            let data = await this.service.updateActivites(params.id,activites)
            return AppResponse.ok(res, data, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Delete(':id')
    async deleteActivites(@Res() res, @Param() params) {
        try {
            let check = await this.service.getActivites(params.id)
            if(!check){
                return AppResponse.notFound(res, "", "")
            }
            let data = await this.service.deleteActivites(params.id,)
            return AppResponse.ok(res, {}, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }
}
