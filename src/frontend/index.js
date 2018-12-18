import * as d3 from 'd3';
import basicExample from './basicExample';

const { pathname } = window.location;

if (pathname === '/basic-example') {
  basicExample(d3);
}
