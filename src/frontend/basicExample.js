const basicExample = (d3) => {
  const dataset = [
    Math.round(Math.random() * 300),
    Math.round(Math.random() * 300),
    Math.round(Math.random() * 300),
    Math.round(Math.random() * 300),
    Math.round(Math.random() * 300),
  ];

  const userDataView = d3.select('.js-data');
  userDataView.text(`Data: [${dataset.join(', ')}]`);

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
    .attr('x', 0)
    .on('mouseover', (d, i, nodes) => d3.select(nodes[i]).style('fill', 'orange'))
    .on('mouseout', (d, i, nodes) => d3.select(nodes[i]).style('fill', 'steelblue'));
};

export default basicExample;
