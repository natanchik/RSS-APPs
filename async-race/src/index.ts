import './style.scss';
import { header } from './ts/blocks/header';
import { wrapper, loadGarage } from './ts/funcs/show-page';

document.body.appendChild(header);
document.body.appendChild(wrapper);
loadGarage();
