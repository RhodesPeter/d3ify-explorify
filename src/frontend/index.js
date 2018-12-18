import * as d3 from 'd3';
import basicExample from './basicExample';
import basicExampleRealData from './basicExampleRealData';
import basicPie from './basicPie';

const { pathname } = window.location;

if (pathname === '/basic-example') {
  basicExample(d3);
}

if (pathname === '/basic-example-real-data') {
  basicExampleRealData(d3);
}

if (pathname === '/basic-pie') {
  basicPie(d3);
}
