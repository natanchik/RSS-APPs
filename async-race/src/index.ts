import './style.scss';
import { header } from './ts/blocks/header';
import { commandBlock } from './ts/blocks/commandBlock';
import { garageBlock } from './ts/blocks/garage';
import { getCars } from './ts/requests/get-cars';

document.body.appendChild(header);

document.body.appendChild(commandBlock);

document.body.appendChild(garageBlock);

getCars();
