import displayRawData from './displayRawData';

const colours = {
  October: '#F76C6C',
  November: '#A8D0E6',
  December: '#FFD700',
};

const displaySVG = (d3, dataset) => {
  const svg = d3.select('#viz')
    .append('svg')
    .attr('width', 400)
    .attr('height', 200);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('fill', d => colours[d.month])
    .attr('width', d => d.data[0].percentage * 4)
    .attr('height', 40)
    .attr('y', (d, i) => i * 70)
    .attr('x', 0);

  svg.selectAll('.text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('x', 0)
    .attr('y', (d, i) => 45 + (i * 70))
    .attr('dy', '.75em')
    .text(d => `${d.month}: ${d.data[0].percentage}%`);
};

const engagedUsers = (d3) => {
  const dataStr = d3
    .select('#viz')
    .attr('data-js');

  const dataset = JSON.parse(dataStr);

  displayRawData(d3, dataset);
  displaySVG(d3, dataset);
};


export default engagedUsers;
