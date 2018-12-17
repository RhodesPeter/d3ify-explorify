import * as d3 from 'd3';

const dataset = [
  Math.round(Math.random() * 300),
  Math.round(Math.random() * 300),
  Math.round(Math.random() * 300),
  Math.round(Math.random() * 300),
  Math.round(Math.random() * 300),
];

console.log(dataset);

const svg = d3.select('#viz')
  .append('svg')
  .attr('width', 400)
  .attr('height', 400);

svg.selectAll('rect')
  .data(dataset)
  .enter().append('rect')
  .attr('fill', 'steelblue')
  .attr('width', d => d)
  .attr('height', 40)
  .attr('y', (d, i) => i * 50 + 10)
  .attr('x', 10)
  .on('mouseover', (d, i, nodes) => d3.select(nodes[i]).style('fill', 'orange'))
  .on('mouseout', (d, i, nodes) => d3.select(nodes[i]).style('fill', 'steelblue'));
