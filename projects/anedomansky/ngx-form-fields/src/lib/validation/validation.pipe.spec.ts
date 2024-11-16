import { ValidationPipe } from './validation.pipe';

describe('ValidationPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidationPipe();
    expect(pipe).toBeTruthy();
  });
});
