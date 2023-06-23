export const editorHtml = document.createElement('div');
editorHtml.classList.add('editor-html');

const htmlText = document.createElement('pre');
htmlText.classList.add('css-text');
htmlText.innerText = `<div class="table">
  <book />
  <book />
  <book />
</div>`
editorHtml.appendChild(htmlText); 