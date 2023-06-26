import { numbers } from './css-editor'

export const htmlPanel = document.createElement('div');
htmlPanel.classList.add('editor-panel');
htmlPanel.classList.add('html-viewer');

const htmlHeader = document.createElement('div');
htmlHeader.classList.add('editor-header');
htmlHeader.innerHTML = '<p>HTML Viewer</p><p>table.html</p>';
htmlPanel.appendChild(htmlHeader);

export const htmlNumColumn = document.createElement('div');
htmlNumColumn.classList.add('editor-numColumn');
htmlPanel.appendChild(htmlNumColumn); 
htmlNumColumn.innerText = numbers.slice(0, -1);

export const htmlText = document.createElement('div');
htmlText.classList.add('editor-html');
htmlPanel.appendChild(htmlText);