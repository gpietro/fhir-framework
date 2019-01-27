const path = require('path');
const schemaPath = path.join(__dirname, '../../fhir/schema')

const format = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const initSchema = (serviceName) => {
    const schema = require(path.join(schemaPath,`${serviceName}.schema.json`));
    schema['$ref'] = `#/definitions/${serviceName}`
    schema.definitions[`${serviceName} list`] = { 
        "type": "array", 
        "schema": { "$ref": `#/definitions/${serviceName}`}
    }    
    Object.defineProperty(schema.definitions, serviceName, Object.getOwnPropertyDescriptor(schema.definitions, serviceName));
    delete schema.definitions[serviceName];
    return schema;
}

module.exports = initSchema