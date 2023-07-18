import { TableItems, levelsData } from '../data-levels';
import { tableHeader, table } from '../blocks/table';
import { htmlText } from '../blocks/html-viewer';
import { cssInput } from '../blocks/css-editor';
import { levelHeader, levelPanel } from '../blocks/levels';
import { levels } from './local-storage';
import { drawItems } from './draw-items';

export const rightAnswers: { items: string[] } = { items: [] };

export function unmarkActiveLevel() {
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

function renderTableItems(items: TableItems, container: HTMLDivElement) {
  for (let i = 0; i < items.length; i += 1) {
    drawItems(items[i], container);
  }
}

function parseLevelsData() {
  const levelData = levelsData.get(levels.active);
  if (levelData) {
    tableHeader.textContent = levelData.header;
    table.innerHTML = '';
    renderTableItems(levelData.tableItems, table);
    rightAnswers.items = levelData.cssCode;
    htmlText.textContent = `<div class="table">${levelData.htmlCode}</div>`;
  }
}

export function changeLevel() {
  unmarkActiveLevel();
  markNewActiveLevel(levels.active);
  localStorage.setItem('level-active', `${levels.active}`);
  levelHeader.textContent = `Level ${levels.active} of 10`;
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
