# dragon-generator

> Project based on feathers-generator
> A Yeoman generator for a Dragon application

## Installation

First you need install [yeoman](http://yeoman.io/).

```bash
npm install -g yo
```

Then install the feathers generator.

```bash
npm install -g yo generator-feathers
```

## Usage

Create a directory for your new app.

```bash
mkdir my-new-app; cd my-new-app/
```

Generate your app and follow the prompts.

```bash
yo dragon
```

Start your brand new app! 💥

```bash
npm start
```

## Available commands

```bash
# short alias for generate new application
yo dragon

# set up authentication
yo dragon:authentication

# set up a database connection
yo dragon:connection

# generate new hook
yo dragon:hook

# generate new middleware
yo dragon:middleware

# generate new service
yo dragon:service
```

## Production
[dragon/dragon-configuration](https://github.com/feathersjs/feathers-configuration) uses `NODE_ENV` to find a configuration file under `config/`. After updating `config/production.js` you can run 

```bash
NODE_ENV=production npm start
```

## Contributing

To contribute PRs for these generators, you will need to clone the repo
then inside the repo's directory, run `npm link`. This sets up a global
link to your local package for running tests (`npm test`) and generating
new dragon apps/services/hooks/etc.

When finished testing, optionally run `npm uninstall dragon-generator` to remove
the link.

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
