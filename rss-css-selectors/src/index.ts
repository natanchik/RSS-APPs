import './style.scss';

import { title, table } from './ts/table';
import { editor } from './ts/editor';
import { levelBlock } from './ts/levels';
import { footer } from './ts/footer';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

document.body.appendChild(levelBlock);

wrapper.appendChild(title);
wrapper.appendChild(table);

wrapper.appendChild(editor);

wrapper.appendChild(footer);