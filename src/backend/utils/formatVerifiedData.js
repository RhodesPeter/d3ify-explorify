const formatVerifiedData = (data) => {
  const dataArray = data.map(value => value.verified);
  const verifiedTotal = dataArray.filter(val => val).length;
  const nonVerifiedTotal = dataArray.length - verifiedTotal;

  return JSON.stringify([
    {
      label: 'Verified',
      count: verifiedTotal,
    }, {
      label: 'NotVerified', // WHY CAN'T IT HAVE A SPACE???
      count: nonVerifiedTotal,
    },
  ]);
};

module.exports = formatVerifiedData;
