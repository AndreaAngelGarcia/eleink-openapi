const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const pathFile = path.resolve(__dirname, 'paths.yml');
const schemasFile = path.resolve(__dirname, 'schemas.yml');
const examplesFile = path.resolve(__dirname, 'examples.yml');
const paths = yaml.load(fs.readFileSync(pathFile, 'utf8'));
const schemas = yaml.load(fs.readFileSync(schemasFile, 'utf8'));
const examples = yaml.load(fs.readFileSync(examplesFile, 'utf8'));

module.exports = {
  openapi: '3.0.3',
  info: {
    version: '0.0.1',
    title: 'My editor notes API',
    description: 'RESTFull API for editor notes in memory',
    termsOfService: 'http://swagger.io/terms/',
  },
  servers: [{ url: 'http://localhost:3000/' }],
  paths,
  components: {
    schemas,
    examples,
  },
};
