const formatVerifiedData = (data) => {
  const dataArray = data.map(value => value.created);

  return JSON.stringify([
    {
      label: 2016,
      count: dataArray.filter(date => date.getFullYear() === 2016).length,
      colour: '#23305E',
    }, {
      label: 2017,
      count: dataArray.filter(date => date.getFullYear() === 2017).length,
      colour: '#A8D0E6',
    },
    {
      label: 2018,
      count: dataArray.filter(date => date.getFullYear() === 2018).length,
      colour: '#F76C6C',
    },
  ]);
};

module.exports = formatVerifiedData;
