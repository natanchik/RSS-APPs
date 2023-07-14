export function createMarks(parent: HTMLElement, marks: string[]) {
  const markInput = document.createElement('input');
  markInput.setAttribute('list', 'markList');
  markInput.classList.add('markInput');
  markInput.classList.add('commandItem');
  parent.appendChild(markInput);

  const markList = document.createElement('datalist');
  markList.setAttribute('id', 'markList');
  parent.appendChild(markList);

  for (let i = 0; i < marks.length; i += 1) {
    const listItem = document.createElement('option');
    listItem.setAttribute('value', marks[i]);
    markList.appendChild(listItem);
  }
}
