import { editorCss } from './css-editor';
import { editorHtml } from './html-viewer';

export const editor = document.createElement('div');
editor.classList.add('editor');

let numbers = '';
for (let i = 1; i < 11; i += 1) { numbers += `${i}\n`; };

// CSS Editor

const cssPanel = document.createElement('div');
cssPanel.classList.add('editor-panel');
cssPanel.classList.add('css-editor');
editor.appendChild(cssPanel);

const cssHeader = document.createElement('div');
cssHeader.classList.add('editor-header');
cssHeader.innerHTML = '<p>CSS Editor</p><p>style.css</p>';
cssPanel.appendChild(cssHeader);

const cssNumColumn = document.createElement('div');
cssNumColumn.classList.add('editor-numColumn');
cssNumColumn.innerText = numbers.slice(0, -1);
cssPanel.appendChild(cssNumColumn);   

cssPanel.appendChild(editorCss);

// HTML viewer

const htmlPanel = document.createElement('div');
htmlPanel.classList.add('editor-panel');
htmlPanel.classList.add('html-viewer');
editor.appendChild(htmlPanel);

const htmlHeader = document.createElement('div');
htmlHeader.classList.add('editor-header');
htmlHeader.innerHTML = '<p>HTML Viewer</p><p>table.html</p>';
htmlPanel.appendChild(htmlHeader);

const htmlNumColumn = document.createElement('div');
htmlNumColumn.classList.add('editor-numColumn');
htmlNumColumn.innerText = numbers.slice(0, -1);
htmlPanel.appendChild(htmlNumColumn); 

htmlPanel.appendChild(editorHtml);