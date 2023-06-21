export const editorHtml = document.createElement('div');
editorHtml.classList.add('editor-html');

const htmlText = document.createElement('pre');
htmlText.classList.add('css-text');
htmlText.innerText = `<div class="table">
  <plate />
  <plate />
</div>`
editorHtml.appendChild(htmlText); 