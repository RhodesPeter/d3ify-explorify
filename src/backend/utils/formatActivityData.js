const formatActivityData = (data) => {
  const sixteen = data.filter(activity => activity.created.getFullYear() === 2016);
  const seventeen = data.filter(activity => activity.created.getFullYear() === 2017);
  const eighteen = data.filter(activity => activity.created.getFullYear() === 2018);

  return JSON.stringify({
    2016: {
      england: sixteen.filter(activity => activity.country === 'England').length,
      scotland: sixteen.filter(activity => activity.country === 'Scotland').length,
      wales: sixteen.filter(activity => activity.country === 'Wales').length,
      ni: sixteen.filter(activity => activity.country === 'Northern Ireland').length,
    },
    2017: {
      england: seventeen.filter(activity => activity.country === 'England').length,
      scotland: seventeen.filter(activity => activity.country === 'Scotland').length,
      wales: seventeen.filter(activity => activity.country === 'Wales').length,
      ni: seventeen.filter(activity => activity.country === 'Northern Ireland').length,
    },
    2018: {
      england: eighteen.filter(activity => activity.country === 'England').length,
      scotland: eighteen.filter(activity => activity.country === 'Scotland').length,
      wales: eighteen.filter(activity => activity.country === 'Wales').length,
      ni: eighteen.filter(activity => activity.country === 'Northern Ireland').length,
    },
  });
};

module.exports = formatActivityData;
