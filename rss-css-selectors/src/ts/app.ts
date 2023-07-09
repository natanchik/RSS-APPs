import { startGame } from './funcs/start-game';
import { createGame } from './funcs/create-game';

export class App {

  public start = () => {
    createGame();
    startGame();
  }

}
