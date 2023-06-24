import { levelsData } from './data-levels';
import { tableHeader, table} from './table';
import { htmlText } from './html-viewer';
import { levelHeader } from './levels';

type tableItemsList = HTMLDivElement | Array<HTMLDivElement | Array<HTMLDivElement | Array<HTMLDivElement>>>

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

const parseLevelsData = function(level: string) {
  const levelData = levelsData[+level];
  tableHeader.innerText = levelData.header;
  table.innerHTML = '';
  const things = levelData.tableItems;
  for (let i = 0; i < things.length; i += 1) {  // objects on the table
    let thing = things[i];    
    drawItems(thing, table);
  }
  htmlText.innerText = `<div class="table">${levelData.htmlCode}</div>`;
}

export const changeLevel = function(level: string) {
  levelHeader.innerText = `Level ${level} of 10`;
  parseLevelsData(level);  
}
