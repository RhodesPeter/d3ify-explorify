import displayRawData from './displayRawData';

const colours = {
  England: '#F76C6C',
  Scotland: '#A8D0E6',
  Wales: '#23305E',
  'Northern Ireland': '#FFD700',
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

  function arcTween(a) {
    const i = d3.interpolate(this.current, a);
    this.current = i(0);
    return t => arc(i(t));
  }

  svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('g')
    .append('path')
    .attr('d', arc)
    .attr('fill', d => colours[d.data.country])
    .transition()
    .duration(500)
    .attrTween('d', arcTween);

  svg.selectAll('g')
    .append('text')
    .text(d => d.data.country)
    .style('fill', '#000')
    .attr('transform', d => `translate(260, ${-50 + (d.index * 40)})`);

  svg.selectAll('g')
    .append('rect')
    .attr('width', 20)
    .attr('height', 20)
    .attr('fill', d => colours[d.data.country])
    .attr('transform', d => `translate(230, ${-65 + (d.index * 40)})`);
};

const updateSVG = (d3, newDataset) => {
  const width = 400;
  const height = 400;
  const radius = Math.min(width, height) / 2;

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  const pie = d3.pie()
    .value(d => d.count)
    .sort(null);

  function arcTween(a) {
    const i = d3.interpolate(this.current, a);
    this.current = i(0);
    return t => arc(i(t));
  }

  d3.selectAll('path')
    .data(pie(newDataset))
    .attr('d', arc)
    .attr('fill', d => colours[d.data.country])
    .transition()
    .duration(500)
    .attrTween('d', arcTween);
};

const attachListenersToButtons = (d3, dataset) => {
  const radios = [...document.querySelectorAll('.radio')];
  radios.forEach(radio => radio.addEventListener('click', (e) => {
    const selectedYear = e.target.getAttribute('class').match(/[0-9]+/g);
    updateSVG(d3, dataset[selectedYear]);
  }));
};

const interactivePie = (d3) => {
  const dataStr = d3
    .select('#viz')
    .attr('data-js');

  console.log(dataStr);
  const dataset = JSON.parse(dataStr);

  attachListenersToButtons(d3, dataset);
  displayRawData(d3, dataset);

  // Default year is currently 2016
  displaySVG(d3, dataset[2016]);
};


export default interactivePie;
