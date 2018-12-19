const displayRawData = (d3, data) => {
  const formattedData = JSON.stringify(data, undefined, 2);
  const userDataView = d3.select('.js-data');
  userDataView.text(`Data: ${formattedData}`);
};

export default displayRawData;
