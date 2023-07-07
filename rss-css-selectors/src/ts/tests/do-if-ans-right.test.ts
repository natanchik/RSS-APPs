import { findUnpassedLevel } from '../funcs/do-if-ans-right';

describe('findUnpassedLevel function', () => {
  it('should return correct higher number', () => {
    let level = 2;
    const passedLevels = [2, 3, 5, 9, 10];
    level = findUnpassedLevel(passedLevels, level);
    expect(level).toBe(4);
  });

  it('should return correct less number', () => {
    let level = 9;
    const passedLevels = [2, 3, 5, 9, 10];
    level = findUnpassedLevel(passedLevels, level);
    expect(level).toBe(1);
  });

  it('should return correct max number', () => {
    let level = 9;
    const passedLevels = [2, 3, 5, 9];
    level = findUnpassedLevel(passedLevels, level);
    expect(level).toBe(10);
  });
});
