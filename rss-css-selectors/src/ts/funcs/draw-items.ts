type TableItemsList = string | (string | (string | string[])[])[];

export function createItem(item: string) {
  const newItem = document.createElement('div');
  newItem.classList.add('table-items');
  const classesList = item.split('-');
  for (let i = 0; i < classesList.length; i += 1) {
    newItem.classList.add(classesList[i]);
  }
  return newItem;
}

function doIfItemString(item: TableItemsList, upThing: HTMLDivElement) {
  if (item && typeof item === 'string') {
    const newItem = createItem(item);
    upThing.appendChild(newItem);
  }
}

export function drawItems(thing: TableItemsList, upBlock: HTMLDivElement) {
  let upThing = upBlock;
  doIfItemString(thing, upThing);
  if (thing && thing instanceof Array) {
    for (let j = 0; j < thing.length; j += 1) {
      if (j === 0) {
        if (thing[0] && typeof thing[0] === 'string') {
          const subThing = createItem(thing[0]);
          upThing.appendChild(subThing);
          upThing = subThing;
        }
      } else {
        drawItems(thing[j], upThing);
      }
    }
  }
}
