const formatActivityData = (data) => {
  const sixteen = data.filter(activity => activity.created.getFullYear() === 2016);
  const seventeen = data.filter(activity => activity.created.getFullYear() === 2017);
  const eighteen = data.filter(activity => activity.created.getFullYear() === 2018);

  return JSON.stringify({
    2016: [
      {
        country: 'england',
        count: sixteen.filter(activity => activity.country === 'England').length,
      }, {
        country: 'scotland',
        count: sixteen.filter(activity => activity.country === 'Scotland').length,
      }, {
        country: 'wales',
        count: sixteen.filter(activity => activity.country === 'Wales').length,
      }, {
        country: 'ni',
        count: sixteen.filter(activity => activity.country === 'Northern Ireland').length,
      },
    ],
    2017: [
      {
        country: 'england',
        count: seventeen.filter(activity => activity.country === 'England').length,
      }, {
        country: 'scotland',
        count: seventeen.filter(activity => activity.country === 'Scotland').length,
      }, {
        country: 'wales',
        count: seventeen.filter(activity => activity.country === 'Wales').length,
      }, {
        country: 'ni',
        count: seventeen.filter(activity => activity.country === 'Northern Ireland').length,
      },
    ],
    2018: [
      {
        country: 'england',
        count: eighteen.filter(activity => activity.country === 'England').length,
      }, {
        country: 'scotland',
        count: eighteen.filter(activity => activity.country === 'Scotland').length,
      }, {
        country: 'wales',
        count: eighteen.filter(activity => activity.country === 'Wales').length,
      }, {
        country: 'ni',
        count: eighteen.filter(activity => activity.country === 'Northern Ireland').length,
      },
    ],
  });
};

module.exports = formatActivityData;
