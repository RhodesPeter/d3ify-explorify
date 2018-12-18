const displayRawData = (d3, data) => {
  const formattedData = JSON.stringify(data, undefined, 2);
  const userDataView = d3.select('.js-data');
  userDataView.text(`Data: ${formattedData}`);
};

const displaySVG = (d3, dataset) => {
  const width = 400;
  const height = 400;
  const radius = Math.min(width, height) / 2;
  const svg = d3.select('#viz')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  const pie = d3.pie()
    .value(d => d.count)
    .sort(null);

  svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('g')
    .append('path')
    .attr('d', arc)
    .attr('fill', d => d.data.colour);

  svg.selectAll('g')
    .append('text')
    .text(d => d.data.label)
    .style('fill', '#000')
    .attr('transform', d => `translate(${arc.centroid(d)})`);
};

const basicPie = (d3) => {
  const dataStr = d3
    .select('#viz')
    .attr('data-js');

  const dataset = JSON.parse(dataStr);

  displayRawData(d3, dataset);
  displaySVG(d3, dataset);
};

module.exports = basicPie;
