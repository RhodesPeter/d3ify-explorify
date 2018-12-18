const routes = (app) => {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'Homepage',
    });
  });

  app.get('/basic-example', (req, res) => {
    res.render('index', {
      title: 'Basic Example',
      message: 'Bar chart made from an array on numbers',
    });
  });
};

module.exports = routes;
