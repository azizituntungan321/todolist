import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { TodoEntity } from './todo.entity/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private service: TodoService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: TodoEntity) {
        return this.service.createUser(user);
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