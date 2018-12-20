import displayRawData from './displayRawData';

const displaySVG = (d3, dataset, svgSize) => {
  const svg = d3.select('#viz')
    .append('svg')
    .attr('width', svgSize)
    .attr('height', 130);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('fill', 'steelblue')
    .attr('width', d => d.count / (svgSize / 4))
    .attr('height', 40)
    .attr('y', (d, i) => i * 70)
    .attr('x', 0)
    .on('mouseover', (d, i, nodes) => d3.select(nodes[i]).style('fill', 'orange'))
    .on('mouseout', (d, i, nodes) => d3.select(nodes[i]).style('fill', 'steelblue'));

  svg.selectAll('.text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('x', 0)
    .attr('y', (d, i) => 45 + (i * 70))
    .attr('dy', '.75em')
    .text(d => d.label);
};

const basicExampleRealData = (d3) => {
  const svgSize = 400;
  const dataStr = d3
    .select('#viz')
    .attr('data-js');

  const parsedData = JSON.parse(dataStr);

  displayRawData(d3, parsedData);
  displaySVG(d3, parsedData, svgSize);
};

export default basicExampleRealData;
