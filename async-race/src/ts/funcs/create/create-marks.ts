export function createMarks(marks: string[]) {
  const markInput = document.createElement('input');
  markInput.setAttribute('list', 'marks');
  markInput.classList.add('markInput');

  const markList = document.createElement('datalist');
  markList.setAttribute('id', 'markList');

  for (let i = 0; i < marks.length; i += 1) {
    const listItem = document.createElement('option');
    listItem.setAttribute('value', marks[i]);
    markList.appendChild(listItem);
  }

  return markInput;
}
