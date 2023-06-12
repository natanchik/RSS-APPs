import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'ee232a4ea84f416a9abb0a7e695b46ae', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
