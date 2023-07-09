import { unmarkActiveLevel, markNewActiveLevel } from '../funcs/change-level';
import { levelPanel } from '../blocks/levels';

describe('unmarkActiveLevel function', () => {
  document.body.innerHTML = '';
  document.body.appendChild(levelPanel);
  const activeDiv = document.createElement('div');
  activeDiv.classList.add('activeLevel');
  levelPanel.appendChild(activeDiv);

  it('should unmark active div', () => {
    unmarkActiveLevel();
    const checkDiv = document.querySelector('.activeLevel');
    expect(checkDiv).toBeNull();
    expect(activeDiv.classList).not.toContain('activeLevel');
  });
});

describe('markNewActiveLevel function', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div>
    <div id="level-1"></div>
    <div id="level-2"></div>
    <div id="level-3"></div>
    <div id="level-4"></div>
    <div id="level-5"></div>    
    </div>`;
  });

  it('should mark active div', () => {
    markNewActiveLevel(3);
    const activeDiv = document.querySelectorAll('.activeLevel');
    expect(activeDiv.length).toBe(1);
    expect(activeDiv[0].id).toContain('level-3');
  });

  it("shouldn't mark wrong div", () => {
    markNewActiveLevel(6);
    const activeDiv = document.querySelectorAll('.activeLevel');
    expect(activeDiv.length).toBe(0);
  });
});
