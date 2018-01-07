'use strict';

function D3Graph(setting) {
  let svg = d3.select('#field').append('svg').attr('width', setting.w).attr('height', setting.h);

}

let d3Graph = new D3Graph({
  w: 1280,
  h: 720
});
