import { EvethingReqParams, SourcesReqParams } from '../../types/types';

class Loader {
  baseLink: string;

  options: EvethingReqParams;

  constructor(baseLink: string, options: EvethingReqParams) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(
    { endpoint = '', options = {} },
    callback: (data: T) => void = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: SourcesReqParams, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.entries(urlOptions).forEach(([key, value]): void => {
      url += `${key}=${value ?? ''}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: string, endpoint: string, callback: (data: T) => void, options: SourcesReqParams = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
