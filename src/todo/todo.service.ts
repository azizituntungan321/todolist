import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity/todo.entity';
import { TodoTransformer } from './todo.transformer';

@Injectable()
export class TodoService {

    constructor(@InjectRepository(TodoEntity) private todosRepository: Repository<TodoEntity>) { }

    async createTodo(todo: TodoEntity){
        todo.is_active = true;
        todo.priority = 'very-high'
        return TodoTransformer.singleTransform(await this.todosRepository.save(todo))
    }

    async getTodos(todo: TodoEntity): Promise<TodoEntity[]> {
        return await this.todosRepository.find();
    }

    async getTodo(id: number): Promise<TodoEntity> {
        let data = await this.todosRepository.findOneBy({ id })
        if (!data) {
            return null;
        }
        return data
        // return TodoTransformer.singleTransform(data)
    }

    async updateTodo(todo: TodoEntity) {
        this.todosRepository.save(todo)
    }

    async deleteTodo(todo: TodoEntity) {
        await this.todosRepository.delete(todo);
        return null
    }
}
