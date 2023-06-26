import { levelsData } from './data-levels';
import { tableHeader, table} from './table';
import { htmlText } from './html-viewer';
import { cssInput } from './css-editor';
import { levelHeader, levelPanel } from './levels';

type tableItemsList = HTMLDivElement | Array<HTMLDivElement | Array<HTMLDivElement | Array<HTMLDivElement>>>

export let cssAnswer: string | string[];

const drawItems = function(thing: tableItemsList, table: HTMLDivElement) {   
  let upThing = table; 
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
        let thingOrArray = thing[j];
        drawItems(thingOrArray, upThing);        
      }  
    }
  }   
}

const parseLevelsData = function(level: number) {
  const levelData = levelsData[level];
  tableHeader.innerText = levelData.header;
  table.innerHTML = '';
  const things = levelData.tableItems;
  for (let i = 0; i < things.length; i += 1) {  // objects on the table
    let thing = things[i];    
    drawItems(thing, table);
  }
  cssAnswer = levelData.cssCode;
  htmlText.innerText = `<div class="table">${levelData.htmlCode}</div>`;
}

export const changeLevel = function(level: number) {
  const activeLevelButton = levelPanel.querySelector('.activeLevel');
  if (activeLevelButton && activeLevelButton instanceof HTMLButtonElement) {
    activeLevelButton.classList.remove('activeLevel');
  }
  const newLevelButton = document.getElementById(`level-${level}`)
  if (newLevelButton && newLevelButton instanceof HTMLButtonElement) {
    newLevelButton.classList.add('activeLevel');
  }
  levelHeader.innerText = `Level ${level} of 10`;
  cssInput.value = '';
  parseLevelsData(level);  
}

