const path = require('path');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
  });
};

module.exports = routes;
