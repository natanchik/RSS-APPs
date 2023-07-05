import { levelsData } from '../data-levels';
import { tableHeader, table } from '../blocks/table';
import { htmlText } from '../blocks/html-viewer';
import { cssInput } from '../blocks/css-editor';
import { levelHeader, levelPanel } from '../blocks/levels';
import { levels } from './local-storage';

type TableItemsList = HTMLDivElement | (HTMLDivElement | (HTMLDivElement | HTMLDivElement[])[])[];

export const rightAnswer: { code: string | string[] } = { code: '' };

function drawItems(thing: TableItemsList, upBlock: HTMLDivElement) {
  let upThing = upBlock;
  if (thing && thing instanceof HTMLDivElement) {
    const newThing = thing.cloneNode(true);
    upThing.appendChild(newThing);
  }
  if (thing && thing instanceof Array) {
    for (let j = 0; j < thing.length; j += 1) {
      let subThing;
      if (j === 0) {
        if (thing[0] && thing[0] instanceof HTMLDivElement) {
          subThing = thing[0].cloneNode(true);
          upThing.appendChild(subThing);
          if (subThing && subThing instanceof HTMLDivElement) {
            upThing = subThing;
          }
        }
      } else {
        drawItems(thing[j], upThing);
      }
    }
  }
}

function parseLevelsData() {
  const levelData = levelsData.get(levels.active);
  if (levelData) {
    tableHeader.innerText = levelData.header;
    table.innerHTML = '';
    const things = levelData.tableItems;
    for (let i = 0; i < things.length; i += 1) {
      const thing = things[i];
      drawItems(thing, table);
    }
    rightAnswer.code = levelData.cssCode;
    htmlText.innerText = `<div class="table">${levelData.htmlCode}</div>`;
  }
}

export function changeLevel() {
  const activeLevelButton = levelPanel.querySelector('.activeLevel');
  if (activeLevelButton) {
    activeLevelButton.classList.remove('activeLevel');
  }
  const newLevelButton = document.getElementById(`level-${levels.active}`);
  if (newLevelButton) {
    newLevelButton.classList.add('activeLevel');
  }
  localStorage.setItem('level-active', `${levels.active}`);
  levelHeader.innerText = `Level ${levels.active} of 10`;
  cssInput.value = '';
  parseLevelsData();
}

export function changeLevelByClick(event: Event) {
  const { target } = event;
  if (target && target instanceof HTMLButtonElement) {
    if (target.classList.contains('level-button')) {
      levels.active = +target.id.slice(6);
      changeLevel();
    }
  }
}
