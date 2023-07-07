import { markLevels } from '../funcs/start-game';

describe('markLevels function', () => {
  document.body.innerHTML += `<div>
  <div id="level-1"></div>
  <div id="level-2"></div>
  <div id="level-3"></div>
  <div id="level-4"></div>
  <div id="level-5"></div>
  <div id="level-6"></div>
  </div>`;

  it('should mark passed divs', () => {
    const passedList = [1, 2, 4, 6];
    markLevels(passedList, 'passed');
    const passedDivs = document.querySelectorAll('.passed');
    expect(passedDivs.length).toBe(4);
  });

  it('should mark helped divs', () => {
    const helpedList = [1, 3, 4];
    markLevels(helpedList, 'helped');
    const helpedDivs = document.querySelectorAll('.helped');
    expect(helpedDivs.length).toBe(3);
    const div4 = document.getElementById('level-4');
    expect(div4?.classList).toContain('passed');
    expect(div4?.classList).toContain('helped');
  });
});
