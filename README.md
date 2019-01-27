# FHIR-framework

## Currently supporting STU3
> Project based on feathers-generator
> A Yeoman generator for a FHIR application

## Installation

First you need install [yeoman](http://yeoman.io/).

```bash
npm install -g yo
```

Then install the feathers generator.

```bash
npm install -g yo fhir-framework
```

## Usage

Create a directory for your new app.

```bash
mkdir my-new-app; cd my-new-app/
```

Generate your app and follow the prompts.

```bash
yo fhir
```

Start your brand new app! 💥

```bash
npm start
```

## Available commands

```bash
# short alias for generate new application
yo fhir

# set up authentication
yo fhir:authentication

# set up a database connection
yo fhir:connection

# generate new hook
yo fhir:hook

# generate new middleware
yo fhir:middleware

# generate new fhir resource service. The name must be plural. Ex. Patients, Observations, MedicationRequests
yo fhir:service
```

## Production
[fhir/fhir-configuration](https://github.com/feathersjs/feathers-configuration) uses `NODE_ENV` to find a configuration file under `config/`. After updating `config/production.js` you can run 

```bash
NODE_ENV=production npm start
```

## Contributing

To contribute PRs for these generators, you will need to clone the repo
then inside the repo's directory, run `npm link`. This sets up a global
link to your local package for running tests (`npm test`) and generating
new fhir apps/services/hooks/etc.

When finished testing, optionally run `npm uninstall fhir-framework` to remove
the link.

## License

Copyright (c) 2018, Pietro Ghezzi

Licensed under the [MIT license](LICENSE).
