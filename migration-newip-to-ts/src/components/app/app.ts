import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { SourcesResObj } from '../../types/types';

class App {
  private controller;

  private view;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  private handleNewsClick = (e: MouseEvent) => this.controller.getNews(e, (data) => this.view.drawNews(data));

  private handleDrawSources = (data: SourcesResObj) => this.view.drawSources(data);

  public start() {
    const divSources = document.querySelector('.sources') as HTMLDivElement | null;
    if (divSources) {
      divSources.addEventListener('click', this.handleNewsClick);
    }
    this.controller.getSources(this.handleDrawSources);
  }
}

export default App;
