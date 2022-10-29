import { TodoEntity } from './todos';

describe('TodoEntity', () => {
  it('should be defined', () => {
    expect(new TodoEntity()).toBeDefined();
  });
});
