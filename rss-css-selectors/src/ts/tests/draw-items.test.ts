import { createItem, doIfItemString } from '../funcs/draw-items';

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

describe('doIfItemString function', () => {
  document.body.innerHTML = '';
  const upBlock = document.createElement('div');
  document.body.appendChild(upBlock);

  it('should call function createItem and add new div if item is string', () => {
    const item = 'book-red';
    doIfItemString(item, upBlock);
    const newItem = upBlock.querySelector('.book');

    expect(newItem).not.toBeNull();
    expect(newItem).toBeInstanceOf(HTMLDivElement);
    expect(newItem?.classList).toContain('red');
  });

  it('should do nothing if item is array', () => {
    const item = ['cat-orange-small', 'napkin'];
    doIfItemString(item, upBlock);
    const newItem = upBlock.querySelector('.cat');

    expect(newItem).toBeNull();
  });
});
