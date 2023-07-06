type TableItemsList = HTMLDivElement | (HTMLDivElement | (HTMLDivElement | HTMLDivElement[])[])[];

function doIfItemDiv(thing: TableItemsList, upThing: HTMLDivElement) {
  if (thing && thing instanceof HTMLDivElement) {
    const newThing = thing.cloneNode(true);
    upThing.appendChild(newThing);
  }
}

function doIfItemArray(thing: TableItemsList, upThing: HTMLDivElement) {
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

export function drawItems(thing: TableItemsList, upBlock: HTMLDivElement) {  
  doIfItemDiv(thing, upBlock);
  doIfItemArray(thing, upBlock);
}
