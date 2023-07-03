import { EvethingReqParams, SourcesReqParams } from '../../types/types';

class Loader {
  private baseLink: string;

  private options: EvethingReqParams;

  constructor(baseLink: string, options: EvethingReqParams) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp<T>(
    { endpoint = '', options = {} },
    callback: (data: T) => void = () => {
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response) {
    if (!res.ok && (res.status === 401 || res.status === 404)) {
      console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  private makeUrl(options: Partial<SourcesReqParams>, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    const queryParams = Object.entries(urlOptions)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return `${this.baseLink}${endpoint}?${queryParams}`;
  }

  private load<T>(
    method: string,
    endpoint: string,
    callback: (data: T) => void,
    options: Partial<SourcesReqParams> = {},
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
