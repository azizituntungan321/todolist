import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity/todo.entity';

@Injectable()
export class TodoService {

    constructor(@InjectRepository(TodoEntity) private usersRepository: Repository<TodoEntity>) { }

    async createUser(user: TodoEntity){
        this.usersRepository.save(user)
    }

    async getUsers(user: TodoEntity): Promise<TodoEntity[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<TodoEntity[]> {
        return await this.usersRepository.find({
            select: ["fullName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async updateUser(user: TodoEntity) {
        this.usersRepository.save(user)
    }

    async deleteUser(user: TodoEntity) {
        this.usersRepository.delete(user);
    }
}
