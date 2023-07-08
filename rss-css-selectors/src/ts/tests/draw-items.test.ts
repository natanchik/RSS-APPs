import { createItem } from '../funcs/draw-items';

describe('createItem function', () => {
  it('should create new div', () => {
    const item = 'book-red';
    const newItem = createItem(item);
    expect(newItem instanceof HTMLDivElement).toBeTruthy();
  });

  it('should add classes to new div', () => {
    const item = 'cat-small-orange';
    const newItem = createItem(item);
    expect(newItem.classList).toContain('small');
    expect(newItem.classList).not.toContain('book');
  });
});
