export const editorCss = document.createElement('div');
editorCss.classList.add('editor-css');

const cssInput = document.createElement('input');
cssInput.classList.add('css-input');
cssInput.autofocus = true;
editorCss.appendChild(cssInput); 
cssInput.placeholder = 'Try in a CSS selector'

const cssButton = document.createElement('button');
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
*/`
editorCss.appendChild(cssText); 