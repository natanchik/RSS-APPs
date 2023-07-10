import { getMarkedLevels } from '../funcs/local-storage';

describe('getMarkedLevels function', () => {
  const firstList = [1, 2, 3, 5];
  localStorage.setItem('levels-marked', JSON.stringify(firstList));

  it('should copy data from local Storage into specified list', () => {
    const newlist: number[] = [];
    getMarkedLevels(newlist, 'marked');

    expect(newlist.length).toBe(4);
    expect(newlist).toEqual([1, 2, 3, 5]);
  });
});
