import { TodoEntity } from './todos.entity';

describe('TodoEntity', () => {
  it('should be defined', () => {
    expect(new TodoEntity()).toBeDefined();
  });
});
