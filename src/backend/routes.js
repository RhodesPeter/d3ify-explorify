const connectToDB = require('./connectToDB');
const formatVerifiedData = require('./utils/formatVerifiedData');
const formatCreatedDateData = require('./utils/formatCreatedDateData');
const pageContent = require('./pageContent');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.render('homepage', pageContent.homepage);
  });

  app.get('/basic-example', (req, res) => {
    res.render('examples', pageContent.basicExample);
  });

  app.get('/basic-example-real-data', (req, res) => {
    const databaseQuery = 'SELECT verified FROM user';

    connectToDB(databaseQuery, (dataFromDB) => {
      pageContent.basicExampleRealData.data = formatVerifiedData(dataFromDB);
      res.render('examples', pageContent.basicExampleRealData);
    });
  });

  app.get('/basic-pie', (req, res) => {
    const databaseQuery = 'SELECT created FROM user';

    connectToDB(databaseQuery, (dataFromDB) => {
      pageContent.basicPie.data = formatCreatedDateData(dataFromDB);
      res.render('examples', pageContent.basicPie);
    });
  });
};

module.exports = routes;
