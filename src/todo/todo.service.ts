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

    async getTodos(activity_group_id: string): Promise<TodoEntity[]> {
        let data = await this.todosRepository.find({
            where: {activity_group_id}
        })
        if (!data) {
            return null;
        }
        return data
    }

    async getTodo(id: number): Promise<TodoEntity> {
        let data = await this.todosRepository.findOneBy({ id })
        if (!data) {
            return null;
        }
        return data
    }

    async updateTodo(todo: TodoEntity) {
        this.todosRepository.save(todo)
    }

    async deleteTodo(todo: TodoEntity) {
        await this.todosRepository.delete(todo);
        return null
    }
}
