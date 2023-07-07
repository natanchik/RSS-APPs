import { unMarkLevels } from '../funcs/reset-game';

describe('unMarkLevels function', () => {
  document.body.innerHTML += `<div>
  <div class="passed helped"></div>
  <div class="helped"></div>
  <div class="passed"></div>
  <div class="passed"></div>
  </div>`;

  it('should unmark passed divs', () => {
    unMarkLevels('passed');
    const passedDivs = document.querySelectorAll('.passed');
    expect(passedDivs.length).toBe(0);
  });

  it('should unmark helped divs', () => {
    unMarkLevels('helped');
    const helpedDivs = document.querySelectorAll('.helped');
    expect(helpedDivs.length).toBe(0);
  });
});
