import { Controller, Post, Body, Get, Put, Delete,Param,Res} from '@nestjs/common';
import { TodoEntity } from './todo.entity/todo.entity';
import { TodoService } from './todo.service';
import { AppResponse } from 'src/response.base';

@Controller('todo-items')
export class TodoController {

    constructor(private service: TodoService) { }

    @Get(':id')
    async get(@Res() res, @Param() params) {
        try {
            let data = await this.service.getTodo(params.id)
            if(!data)
            return AppResponse.notFound(res, "", "Success")
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

    @Put()
    update(@Body() todo: TodoEntity) {
        return this.service.updateTodo(todo);
    }

    @Delete(':id')
    deleteTodo(@Param() params) {
        return this.service.deleteTodo(params.id);
    }
}