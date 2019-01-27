'use strict'

const Ajv = require('ajv');
const draft04 = require('ajv/lib/refs/json-schema-draft-04.json');
const errors = require('feathers-errors');
// const fetch = require('node-fetch');
const jsonfile = require('jsonfile')

const loadSchema = (uri) => {
  let parts = uri.split('/')
  let file = parts[parts.length - 1]
  console.log('fetching: ' + file + '...')
  return new Promise((resolve, reject) => resolve(jsonfile.readFileSync(__dirname + `/../../fhir/schema/${file}`)))
  // fetch(uri).then(res => res.json());
}

module.exports = function (url, options = {}) {
  return async function validationHook (hook) {
    let parts = url.split('/')
    let file = parts[parts.length - 1]
    console.log('validating: ' + file);
    const schema = jsonfile.readFileSync(__dirname + `/../../fhir/schema/${file}`);
    // const schema = await fetch(url).then(res => res.json());
    const ajv = new Ajv(Object.assign({}, {loadSchema, allErrors: true}, options));
    ajv.addMetaSchema(draft04);
    const validator = new Promise( (resolve, reject) => {
      try {
        resolve(ajv.compileAsync(schema))
      } catch (error) {
        reject(error)
      }
    })

    validator.catch(() => {
      throw new errors.Unprocessable('Invalid schema');
      return hook
    })

    if (hook.data) {      
      return validator.then( validate => {
        hook.params.validated = validate(hook.data)
        if (!hook.params.validated) {
          throw new errors.Unprocessable('Invalid request data', {
            errors: validate.errors
          })
        }
        return hook;
      })
    }
    return hook;
  };
};