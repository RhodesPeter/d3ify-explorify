const connectToDB = require('./connectToDB');
const formatVerifiedData = require('./utils/formatVerifiedData');
const formatCreatedDateData = require('./utils/formatCreatedDateData');
const formatActivityData = require('./utils/formatActivityData');
const formatEngagedUserData = require('./utils/formatEngagedUserData');
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

    connectToDB(databaseQuery)
      .then((dataFromDB) => {
        pageContent.basicExampleRealData.data = formatVerifiedData(dataFromDB);
        res.render('examples', pageContent.basicExampleRealData);
      });
  });

  app.get('/basic-pie', (req, res) => {
    const databaseQuery = 'SELECT created FROM user';

    connectToDB(databaseQuery)
      .then((dataFromDB) => {
        pageContent.basicPie.data = formatCreatedDateData(dataFromDB);
        res.render('examples', pageContent.basicPie);
      });
  });

  app.get('/interactive-pie', (req, res) => {
    const databaseQuery = 'SELECT country, created FROM school';

    connectToDB(databaseQuery)
      .then((dataFromDB) => {
        pageContent.interactivePie.data = formatActivityData(dataFromDB);
        res.render('examples', pageContent.interactivePie);
      });
  });

  const engagedQuery = (to, from) => `
    SELECT
    COUNT(DISTINCT u.id) AS total_registered,
    SUM(al.timestamp IS NOT NULL AND DATEDIFF(FROM_UNIXTIME(al.timestamp), u.registration_completed) <= 14) AS viewed_activity,
    SUM(al.timestamp IS NOT NULL AND DATEDIFF(FROM_UNIXTIME(al.timestamp), u.registration_completed) <= 14) / COUNT(DISTINCT u.id) * 100 AS percentage
    FROM user u
    INNER JOIN user_details ud ON ud.user_id = u.id
    LEFT JOIN activity_view al ON al.id = (SELECT MIN(id) FROM activity_view WHERE user_id = u.id)
    WHERE
        u.test_user = 0
    AND u.registration_completed IS NOT NULL
    AND (SELECT SUM(teacher_role) FROM role INNER JOIN user_roles ON role_id = role.id WHERE user_details_id = ud.id) >= 1
    AND u.registration_completed BETWEEN '${to}' AND '${from}';
  `;

  app.get('/engaged-users', (req, res) => {
    const data = {
      October: null,
      November: null,
      December: null,
    };

    connectToDB(engagedQuery('2018-10-01', '2018-10-31'))
      .then((dataFromDB) => {
        data.October = dataFromDB;
        return connectToDB(engagedQuery('2018-11-01', '2018-11-30'));
      }).then((dataFromDB) => {
        data.November = dataFromDB;
        return connectToDB(engagedQuery('2018-11-01', '2019-01-31'));
      }).then((dataFromDB) => {
        data.December = dataFromDB;
        pageContent.engagedUsers.data = formatEngagedUserData(data);
        res.render('examples', pageContent.engagedUsers);
      });
  });
};

module.exports = routes;
