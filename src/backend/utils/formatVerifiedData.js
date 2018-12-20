const formatVerifiedData = (data) => {
  const dataArray = data.map(value => value.verified);
  const verifiedTotal = dataArray.filter(val => val).length;
  const nonVerifiedTotal = dataArray.length - verifiedTotal;

  return JSON.stringify([
    {
      label: 'Verified',
      count: verifiedTotal,
    }, {
      label: 'Not Verified',
      count: nonVerifiedTotal,
    },
  ]);
};

module.exports = formatVerifiedData;
