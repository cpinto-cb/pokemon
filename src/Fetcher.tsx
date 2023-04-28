import axios, {AxiosResponse} from 'axios';
/**
 *
 * @param endpoint
 * @param params
 * @param setter
 * @param failed
 * @constructor
 */
export const Fetcher = (endpoint: string, params: object, setter: (resp:AxiosResponse) => void, failed: any) => {
    axios.get(endpoint, { params }).then((results: AxiosResponse) => {
        setter(results);
    }).catch((error: Error) => {
        typeof failed === 'function' && failed(error);
    });
};

export default Fetcher;
