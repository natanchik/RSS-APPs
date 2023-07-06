type TableItemsList = string | (string | (string | string[])[])[];

function createItem(item: string) {
  const newItem = document.createElement('div');
  newItem.classList.add('table-items');
  const classesList = item.split('-');  
  for (let i = 0; i < classesList.length; i += 1) {
    newItem.classList.add(classesList[i]);
  }  
  return newItem;
}

function doIfItemDiv(item: TableItemsList, upThing: HTMLDivElement) {
  if (item && typeof item === 'string') {
    const newItem = createItem(item);
    upThing.appendChild(newItem);
  }
}

function doIfItemArray(thing: TableItemsList, upThing: HTMLDivElement) {
  if (thing && thing instanceof Array) {
    for (let j = 0; j < thing.length; j += 1) {      
      if (j === 0) {
        if (thing[0] && typeof thing[0] === 'string') {
          let subThing = createItem(thing[0])
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

export function drawItems(thing: TableItemsList, upBlock: HTMLDivElement) {  
  doIfItemDiv(thing, upBlock);
  doIfItemArray(thing, upBlock);
}
