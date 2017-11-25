import { Headers, RequestOptionsArgs } from '@angular/http'; // ignore

export class AuthTokensOptionsTransformer {
    protected transformOptions(options: RequestOptionsArgs): Promise<RequestOptionsArgs> {
        options.headers = new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer xxxxxxxxxxxx',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        });
        return Promise.resolve(options);
    }
}