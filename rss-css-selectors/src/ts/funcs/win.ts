import { table, congratulations } from '../blocks/table';

const backgroundWinAnimation = [
  { background: 'repeating-linear-gradient(45deg, #00FF00, #FDE910, #00FF00, #FDE910)' },
  { background: 'repeating-linear-gradient(135deg, #FDE910, #00FF00, #FDE910, #00FF00)' },
  { background: 'repeating-linear-gradient(225deg, #00FF00, #FDE910, #00FF00, #FDE910)' },
  { background: 'repeating-linear-gradient(315deg, #FDE910, #00FF00, #FDE910, #00FF00)' },
];

const optionsWinAnimation = {
  duration: 2000,
  iterations: Infinity,
};

export function win() {
  table.innerHTML = '';
  table.appendChild(congratulations);
  table.animate(backgroundWinAnimation, optionsWinAnimation);
}
