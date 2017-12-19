const fs = require('fs');
/* eslint import/no-dynamic-require:0 */
const swagger = require(`../swagger.json`);
const { CodeGen } = require('swagger-js-codegen');

const customCode = CodeGen.getCustomCode({
    className: 'WebApi',
    swagger,
    template: {
        class: fs.readFileSync(`${__dirname}/class-template.mustache`, 'utf-8'),
        method: fs.readFileSync(`${__dirname}/method-template.mustache`, 'utf-8')
    }
});
fs.writeFile('./custom-services.js', customCode);
