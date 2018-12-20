const formatEngagedUserData = data => JSON.stringify([
  {
    month: 'October',
    data: data.October,
  }, {
    month: 'November',
    data: data.November,
  }, {
    month: 'December',
    data: data.December,
  },
]);

module.exports = formatEngagedUserData;
