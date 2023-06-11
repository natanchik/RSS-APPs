import News from './news/news';
import Sources from './sources/sources';
import { Article, Source } from '../../types/types';

export class AppView {
  news: Article[];

  sources: Source[];

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  static drawNews(data: Article[]) {
    const values = data || [];
    News.draw(values);
  }

  static drawSources(data: Source[]) {
    const values = data || [];
    Sources.draw(values);
  }
}

export default AppView;
