import { RequestOptionsArgs as Options } from '@angular/http';

class BaseService {
    protected transformOptions(options: Options) {
        options.headers.append('Authorization', 'SUPER_TOKEN');
        return Promise.resolve(options);
    }
}