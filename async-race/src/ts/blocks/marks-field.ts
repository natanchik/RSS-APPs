import { marks } from '../marks';

export const markInput = document.createElement('input');
markInput.setAttribute('list', 'markList');
markInput.classList.add('markInput');
markInput.classList.add('commandItem');

export const markList = document.createElement('datalist');
markList.setAttribute('id', 'markList');

for (let i = 0; i < marks.length; i += 1) {
  const listItem = document.createElement('option');
  listItem.setAttribute('value', marks[i]);
  markList.appendChild(listItem);
}
