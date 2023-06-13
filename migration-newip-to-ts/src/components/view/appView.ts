import News from './news/news';
import Sources from './sources/sources';
import { SourcesResObj, ArticlesResObj, Article, Source } from '../../types/types';

export class AppView {
  protected news;

  protected sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: ArticlesResObj) {
    const values: Article[] | null = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: SourcesResObj) {
    const values: Source[] | null = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
