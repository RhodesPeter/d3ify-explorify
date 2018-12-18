// At some point make a 'main content' block and serve different content depending on the page

const routes = (app) => {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'D3ify Explorify',
      links: [
        { link: '/basic-example', text: 'basic example' },
      ],
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
