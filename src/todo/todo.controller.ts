import { Controller, Post, Body, Get, Put, Delete,Param,Res} from '@nestjs/common';
import { TodoEntity } from './todo.entity/todo.entity';
import { TodoService } from './todo.service';
import { AppResponse } from 'src/response.base';

@Controller('todo-items')
export class TodoController {

    constructor(private service: TodoService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    async create(@Res() res, @Body() user: TodoEntity) {
        try {
            let data = await this.service.createUser(user)
            return AppResponse.ok(res, data, "Success create todo!")
        } catch (e) {
            return AppResponse.badRequest(res, "", e.message)
        }
    }

    @Put()
    update(@Body() user: TodoEntity) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}