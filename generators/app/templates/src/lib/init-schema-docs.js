const path = require('path');
const schemaPath = path.join(__dirname, '../../../fhir/schema')

const format = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const initSchema = (serviceName) => {
    const oldKey = serviceName.split('-').map(s => format(s)).join('').slice(0,-1);
    const schema = require(path.join(schemaPath,`${oldKey}.schema.json`));
    schema['$ref'] = `#/definitions/${serviceName}`
    schema.definitions[`${serviceName} list`] = { 
        "type": "array", 
        "schema": { "$ref": `#/definitions/${serviceName}`}
    }    
    Object.defineProperty(schema.definitions, serviceName, Object.getOwnPropertyDescriptor(schema.definitions, oldKey));
    delete schema.definitions[oldKey];
    return schema;
}

module.exports = initSchema