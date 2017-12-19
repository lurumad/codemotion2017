import request from 'superagent';

/* eslint space-unary-ops:0 */
/* eslint no-trailing-spaces:0 */
/* eslint camelcase:0 */
/* eslint eol-last:0 */

/**
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * @class WebApi
 * @param {(string)} [domainOrOptions] - The project domain.
 */
export default class WebApi {
    constructor(domain = 'http://petstore.swagger.io/v2', logger) {
        this.errorHandlers = [];
        this.domain = domain;
        this.logger = logger;
    }

    addErrorHandler(handler) {
        if (typeof handler !== 'function') throw new Error('You should register a function as error handler');
        this.errorHandlers.push(handler);
    }

    request(method, url, body, headers, queryParameters, form, reject, resolve) {
        if (this.logger) {
            this.logger.log(`Call ${method} ${url}`);
        }

        const req = request(method, url).query(queryParameters);

        Object.keys(headers).forEach(key => req.set(key, headers[key]));

        if (body) {
            req.send(body);
        }

        if (typeof(body) === 'object' && !(body.constructor.name === 'Buffer')) {
            req.set('Content-Type', 'application/json');
        }

        if (Object.keys(form).length > 0) {
            req.type('form');
            req.send(form);
        }

        req.end((error, response) => {
            if (error || !response.ok) {
                reject(error);
                this.errorHandlers.forEach(handler => handler(error));
            } else {
                resolve(response);
            }
        });
    }

    /**
     * Add a new pet to the store
     * @method
     * @name WebApi#addPet
     * @param {} body - Pet object that needs to be added to the store
     */
    addPet(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';
            headers['Content-Type'] = 'application/json,application/xml';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Update an existing pet
     * @method
     * @name WebApi#updatePet
     * @param {} body - Pet object that needs to be added to the store
     */
    updatePet(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';
            headers['Content-Type'] = 'application/json,application/xml';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Multiple status values can be provided with comma separated strings
     * @method
     * @name WebApi#findPetsByStatus
     * @param {array} status - Status values that need to be considered for filter
     */
    findPetsByStatus(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet/findByStatus';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['status'] !== undefined) {
                queryParameters['status'] = parameters['status'];
            }

            if (parameters['status'] === undefined) {
                reject(new Error('Missing required  parameter: status'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @method
     * @name WebApi#findPetsByTags
     * @param {array} tags - Tags to filter by
     */
    findPetsByTags(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet/findByTags';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['tags'] !== undefined) {
                queryParameters['tags'] = parameters['tags'];
            }

            if (parameters['tags'] === undefined) {
                reject(new Error('Missing required  parameter: tags'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Returns a single pet
     * @method
     * @name WebApi#getPetById
     * @param {integer} petId - ID of pet to return
     */
    getPetById(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet/{petId}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Updates a pet in the store with form data
     * @method
     * @name WebApi#updatePetWithForm
     * @param {integer} petId - ID of pet that needs to be updated
     * @param {string} name - Updated name of the pet
     * @param {string} status - Updated status of the pet
     */
    updatePetWithForm(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet/{petId}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';
            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters['name'] !== undefined) {
                form['name'] = parameters['name'];
            }

            if (parameters['status'] !== undefined) {
                form['status'] = parameters['status'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Deletes a pet
     * @method
     * @name WebApi#deletePet
     * @param {string} apiKey - This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
     * @param {integer} petId - Pet id to delete
     */
    deletePet(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet/{petId}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['apiKey'] !== undefined) {
                headers['api_key'] = parameters['apiKey'];
            }

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * uploads an image
     * @method
     * @name WebApi#uploadFile
     * @param {integer} petId - ID of pet to update
     * @param {string} additionalMetadata - Additional data to pass to server
     * @param {file} file - file to upload
     */
    uploadFile(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/pet/{petId}/uploadImage';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';
            headers['Content-Type'] = 'multipart/form-data';

            path = path.replace('{petId}', `${parameters['petId']}`);

            if (parameters['petId'] === undefined) {
                reject(new Error('Missing required  parameter: petId'));
                return;
            }

            if (parameters['additionalMetadata'] !== undefined) {
                form['additionalMetadata'] = parameters['additionalMetadata'];
            }

            if (parameters['file'] !== undefined) {
                form['file'] = parameters['file'];
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Returns a map of status codes to quantities
     * @method
     * @name WebApi#getInventory
     */
    getInventory(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/store/inventory';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Place an order for a pet
     * @method
     * @name WebApi#placeOrder
     * @param {} body - order placed for purchasing the pet
     */
    placeOrder(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/store/order';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     * @method
     * @name WebApi#getOrderById
     * @param {integer} orderId - ID of pet that needs to be fetched
     */
    getOrderById(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/store/order/{orderId}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{orderId}', `${parameters['orderId']}`);

            if (parameters['orderId'] === undefined) {
                reject(new Error('Missing required  parameter: orderId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     * @method
     * @name WebApi#deleteOrder
     * @param {integer} orderId - ID of the order that needs to be deleted
     */
    deleteOrder(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/store/order/{orderId}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{orderId}', `${parameters['orderId']}`);

            if (parameters['orderId'] === undefined) {
                reject(new Error('Missing required  parameter: orderId'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * This can only be done by the logged in user.
     * @method
     * @name WebApi#createUser
     * @param {} body - Created user object
     */
    createUser(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Creates list of users with given input array
     * @method
     * @name WebApi#createUsersWithArrayInput
     * @param {} body - List of user object
     */
    createUsersWithArrayInput(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user/createWithArray';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Creates list of users with given input array
     * @method
     * @name WebApi#createUsersWithListInput
     * @param {} body - List of user object
     */
    createUsersWithListInput(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user/createWithList';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            form = queryParameters;
            queryParameters = {};

            this.request('POST', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Logs user into the system
     * @method
     * @name WebApi#loginUser
     * @param {string} username - The user name for login
     * @param {string} password - The password for login in clear text
     */
    loginUser(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user/login';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters['username'] !== undefined) {
                queryParameters['username'] = parameters['username'];
            }

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters['password'] !== undefined) {
                queryParameters['password'] = parameters['password'];
            }

            if (parameters['password'] === undefined) {
                reject(new Error('Missing required  parameter: password'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Logs out current logged in user session
     * @method
     * @name WebApi#logoutUser
     */
    logoutUser(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user/logout';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * Get user by user name
     * @method
     * @name WebApi#getUserByName
     * @param {string} username - The name that needs to be fetched. Use user1 for testing. 
     */
    getUserByName(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user/{username}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{username}', `${parameters['username']}`);

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('GET', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * This can only be done by the logged in user.
     * @method
     * @name WebApi#updateUser
     * @param {string} username - name that need to be updated
     * @param {} body - Updated user object
     */
    updateUser(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user/{username}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{username}', `${parameters['username']}`);

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters['body'] !== undefined) {
                body = parameters['body'];
            }

            if (parameters['body'] === undefined) {
                reject(new Error('Missing required  parameter: body'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('PUT', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
    /**
     * This can only be done by the logged in user.
     * @method
     * @name WebApi#deleteUser
     * @param {string} username - The name that needs to be deleted
     */
    deleteUser(parameters = {}) {
        const {
            domain
        } = this;
        let path = '/user/{username}';
        let body;
        let queryParameters = {};
        const headers = {};
        let form = {};
        return new Promise((resolve, reject) => {
            headers['Accept'] = 'application/xml, application/json';

            path = path.replace('{username}', `${parameters['username']}`);

            if (parameters['username'] === undefined) {
                reject(new Error('Missing required  parameter: username'));
                return;
            }

            if (parameters.$queryParameters) {
                Object.keys(parameters.$queryParameters).forEach((parameterName) => {
                    queryParameters[parameterName] = parameters.$queryParameters[parameterName];
                });
            }

            this.request('DELETE', domain + path, body, headers, queryParameters, form, reject, resolve);
        });
    }
}