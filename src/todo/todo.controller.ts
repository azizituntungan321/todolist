import { Controller, Post, Body, Req, Get, Put, Delete,Param,Res, Query, Patch} from '@nestjs/common';
import { TodoEntity } from './entity/todos.entity';
import { TodoService } from './todo.service';
import { AppResponse } from 'src/response.base';

@Controller('todo-items')
export class TodoController {

    constructor(private service: TodoService) { }

    @Get(':id')
    async get(@Res() res, @Param() params) {
        try {
            let data = await this.service.getTodo(params.id)
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
            let data = await this.service.getTodos(id)
            if(!data.length){
                return AppResponse.notFound(res, "", "")
            }
            return AppResponse.ok(res, data, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Post()
    async create(@Res() res, @Body() todo: TodoEntity) {
        try {
            let data = await this.service.createTodo(todo)
            return AppResponse.ok(res, data, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Patch(':id')
    async update(@Res() res, @Body() todo: TodoEntity, @Param() params) {
        try {
            let check = await this.service.getTodo(params.id)
            if(!check){
                return AppResponse.notFound(res, "", "")
            }
            let data = await this.service.updateTodo(params.id,todo)
            return AppResponse.ok(res, data, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Delete(':id')
    async deleteTodo(@Res() res, @Param() params) {
        try {
            let check = await this.service.getTodo(params.id)
            if(!check){
                return AppResponse.notFound(res, "", "")
            }
            let data = await this.service.deleteTodo(params.id,)
            return AppResponse.ok(res, {}, "Success")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }
}