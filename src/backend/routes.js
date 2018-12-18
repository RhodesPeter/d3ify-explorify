const connectToDB = require('./connectToDB');
const formatVerifiedData = require('./utils/formatVerifiedData');
const formatCreatedDateData = require('./utils/formatCreatedDateData');

// At some point make a 'main content' block and serve different content depending on the page

const routes = (app) => {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'D3ify Explorify',
      links: [
        { link: '/basic-example', text: 'basic example' },
        { link: '/basic-example-real-data', text: 'basic example real data' },
        { link: '/basic-pie', text: 'basic pie chart' },
      ],
    });
  });

  app.get('/basic-example', (req, res) => {
    res.render('index', {
      title: 'Basic Example',
      message: 'Bar chart made from an array on numbers',
      breadcrumb: true,
    });
  });

  app.get('/basic-example-real-data', (req, res) => {
    // Select the 'verified' column from the user table in the Explorify database.
    const databaseQuery = 'SELECT verified FROM user';

    connectToDB(databaseQuery, (dataFromDB) => {
      res.render('index', {
        title: 'Basic Example with Explorify data',
        message: 'Number of verified vs. unverified teachers',
        breadcrumb: true,
        data: formatVerifiedData(dataFromDB),
      });
    });
  });

  app.get('/basic-pie', (req, res) => {
    // Select the 'created' column from the user table in the Explorify database.
    const databaseQuery = 'SELECT created FROM user';

    connectToDB(databaseQuery, (dataFromDB) => {
      res.render('index', {
        title: 'Pie chart with Explorify data',
        message: 'The year that our teachers signed up',
        breadcrumb: true,
        data: formatCreatedDateData(dataFromDB),
      });
    });
  });
};

module.exports = routes;
