import { startGame } from './funcs/start-game';
import { resetGame } from './funcs/reset-game';
import { createGame } from './funcs/create-game';
import { addHandlers } from './funcs/add-handlers';

export class App {
  createGame = createGame;

  addHandlers = addHandlers;

  startGame = startGame;

  resetGame = resetGame;
}
