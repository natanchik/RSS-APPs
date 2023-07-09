import { wrapper } from '../blocks/wrapper';
import { tableHeader, table } from '../blocks/table';
import { htmlPanel } from '../blocks/html-viewer';
import { cssPanel } from '../blocks/css-editor';
import { levelBlock, menuButton } from '../blocks/levels';
import { footer } from '../blocks/footer';

export function createGame() {
  document.body.appendChild(wrapper);

  const editor = document.createElement('div');
  editor.classList.add('editor');

  document.body.appendChild(levelBlock);
  wrapper.appendChild(menuButton);

  wrapper.appendChild(tableHeader);
  wrapper.appendChild(table);

  wrapper.appendChild(editor);
  editor.appendChild(cssPanel);
  editor.appendChild(htmlPanel);

  wrapper.appendChild(footer);
}
