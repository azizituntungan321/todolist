import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TodoEntity } from './todo/entity/todos.entity';
import { ActivitesModule } from './activites/activites.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'host.docker.internal',
      // host: `${process.env.MYSQL_HOST}`,
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'todo4',
      autoLoadEntities: true,
      entities: [TodoEntity],
      synchronize: true,
    }),
    TodoModule,
    ActivitesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
