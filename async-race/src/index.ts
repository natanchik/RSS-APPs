import './style.scss';
import { header } from './ts/blocks/header';
import { createCommandBlock } from './ts/blocks/commandBlock';
import { garageBlock } from './ts/blocks/garage';
import { createRaceStrip } from './ts/blocks/race-strip';

document.body.appendChild(header);

document.body.appendChild(createCommandBlock());

document.body.appendChild(garageBlock);

document.body.appendChild(createRaceStrip('Tesla'));

document.body.appendChild(createRaceStrip('Opel'));

document.body.appendChild(createRaceStrip('Lada'));
