import { markLevel } from '../funcs/mark-level';

describe('markLevel function', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div>
    <button id="level-1"></button>
    <button id="level-2"></button>
    <button id="level-3"></button>
    <button id="level-4"></button>
    <button id="level-5"></button>
    </div>`;
  });

  const mark = 'passed';

  it('should add class to button', () => {
    const curLevel = 3;
    const list = [1, 2];
    markLevel(list, curLevel, mark);
    const btn = document.getElementById('level-3');
    expect(btn?.classList).toContain('passed');
  });

  it('should update marked list', () => {
    const curLevel = 5;
    const list = [1, 2];
    markLevel(list, curLevel, mark);
    expect(list.length).toBe(3);
    expect(list).toEqual([1, 2, 5]);
  });

  it('should update marked levels in localStorage', () => {
    const curLevel = 4;
    const list = [1, 2];
    markLevel(list, curLevel, mark);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(`levels-${mark}`, JSON.stringify(list));
  });
});
