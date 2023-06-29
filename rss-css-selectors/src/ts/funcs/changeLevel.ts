import { levelsData } from '../data-levels';
import { tableHeader, table } from '../table';
import { htmlText } from '../html-viewer';
import { cssInput } from '../css-editor';
import { levelHeader, levelPanel } from '../levels';

export const levels = {
  active: 1,
  passed: [],
  helped: [],
};

const level = levels.active;

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
  const levelData = levelsData[level];
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

export function changeLevel() {
  const activeLevelButton = levelPanel.querySelector('.activeLevel');
  if (activeLevelButton && activeLevelButton instanceof HTMLButtonElement) {
    activeLevelButton.classList.remove('activeLevel');
  }
  const newLevelButton = document.getElementById(`level-${level}`);
  if (newLevelButton && newLevelButton instanceof HTMLButtonElement) {
    newLevelButton.classList.add('activeLevel');
  }
  levelHeader.innerText = `Level ${level} of 10`;
  cssInput.value = '';
  parseLevelsData();
}
