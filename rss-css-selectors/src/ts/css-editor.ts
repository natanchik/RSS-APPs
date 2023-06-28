let numbersList = '';
for (let i = 1; i < 11; i += 1) {
  numbersList += `${i}\n`;
}
export const numbers = numbersList;

export const cssPanel = document.createElement('div');
cssPanel.classList.add('editor-panel');
cssPanel.classList.add('css-editor');

const cssHeader = document.createElement('div');
cssHeader.classList.add('editor-header');
cssHeader.innerHTML = '<p>CSS Editor</p><p>style.css</p>';
cssPanel.appendChild(cssHeader);

export const cssNumColumn = document.createElement('div');
cssNumColumn.classList.add('editor-numColumn');
cssNumColumn.innerText = numbers.slice(0, -1);
cssPanel.appendChild(cssNumColumn);

const editorCss = document.createElement('div');
editorCss.classList.add('editor-css');
cssPanel.appendChild(editorCss);

export const cssInput = document.createElement('input');
cssInput.classList.add('css-input');
cssInput.autofocus = true;
cssInput.placeholder = 'Try in a CSS selector';
editorCss.appendChild(cssInput);

export const cssButton = document.createElement('button');
cssButton.classList.add('css-button');
cssButton.innerText = 'Enter';
editorCss.appendChild(cssButton);

const cssText = document.createElement('pre');
cssText.classList.add('css-text');
cssText.innerText = `{
/* Styles would go here. */
}
/*
Type a number to skip to a level.
Ex → "5" for level 5
*/`;
editorCss.appendChild(cssText);
