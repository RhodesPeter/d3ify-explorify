const formatActivityData = (data) => {
  const sixteen = data.filter(activity => activity.created.getFullYear() === 2016);
  const seventeen = data.filter(activity => activity.created.getFullYear() === 2017);
  const eighteen = data.filter(activity => activity.created.getFullYear() === 2018);

  return JSON.stringify({
    2016: [
      {
        country: 'England',
        count: sixteen.filter(activity => activity.country === 'England').length,
      }, {
        country: 'Scotland',
        count: sixteen.filter(activity => activity.country === 'Scotland').length,
      }, {
        country: 'Wales',
        count: sixteen.filter(activity => activity.country === 'Wales').length,
      }, {
        country: 'Northern Ireland',
        count: sixteen.filter(activity => activity.country === 'Northern Ireland').length,
      },
    ],
    2017: [
      {
        country: 'England',
        count: seventeen.filter(activity => activity.country === 'England').length,
      }, {
        country: 'Scotland',
        count: seventeen.filter(activity => activity.country === 'Scotland').length,
      }, {
        country: 'Wales',
        count: seventeen.filter(activity => activity.country === 'Wales').length,
      }, {
        country: 'Northern Ireland',
        count: seventeen.filter(activity => activity.country === 'Northern Ireland').length,
      },
    ],
    2018: [
      {
        country: 'England',
        count: eighteen.filter(activity => activity.country === 'England').length,
      }, {
        country: 'Scotland',
        count: eighteen.filter(activity => activity.country === 'Scotland').length,
      }, {
        country: 'Wales',
        count: eighteen.filter(activity => activity.country === 'Wales').length,
      }, {
        country: 'Northern Ireland',
        count: eighteen.filter(activity => activity.country === 'Northern Ireland').length,
      },
    ],
  });
};

module.exports = formatActivityData;
