import { levelsData } from '../data-levels';
import { tableHeader, table } from '../blocks/table';
import { htmlText } from '../blocks/html-viewer';
import { cssInput } from '../blocks/css-editor';
import { levelHeader, levelPanel } from '../blocks/levels';
import { levels } from './local-storage';
import { drawItems } from './draw-items';

export const rightAnswer: { code: string | string[] } = { code: '' };

function unmarkActiveLevel() {
  const activeLevel = levelPanel.querySelector('.activeLevel');
  if (activeLevel) {
    activeLevel.classList.remove('activeLevel');
  }
}

export function markNewActiveLevel(level: number) {
  const newLevel = document.getElementById(`level-${level}`);
  if (newLevel) {
    newLevel.classList.add('activeLevel');
  }
}

function parseLevelsData() {
  const levelData = levelsData.get(levels.active);
  if (levelData) {
    tableHeader.innerText = levelData.header;
    table.innerHTML = '';
    const things = levelData.tableItems;
    for (let i = 0; i < things.length; i += 1) {
      drawItems(things[i], table);
    }
    rightAnswer.code = levelData.cssCode;
    htmlText.innerText = `<div class="table">${levelData.htmlCode}</div>`;
  }
}

export function changeLevel() {
  unmarkActiveLevel();
  markNewActiveLevel(levels.active);
  localStorage.setItem('level-active', `${levels.active}`);
  levelHeader.innerText = `Level ${levels.active} of 10`;
  cssInput.value = '';
  parseLevelsData();
}

export function changeLevelByClick(event: Event) {
  const { target } = event;
  if (target && target instanceof HTMLButtonElement && target.classList.contains('level-button')) {
    levels.active = +target.id.slice(6);
    changeLevel();
  }
}
