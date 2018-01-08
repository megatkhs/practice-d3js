'use strict';

function D3Graph(setting) {
  let dataset = [[5, 20], [480, 90], [250, 50], [100, 33],  [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]],
      w = setting.w,
      h = setting.h,
      Xscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d){ return d[0] })]).range([0, w]),
      Yscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d){ return d[1] })]).range([0, h]),
      Rscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d){ return d[1] })]).range([20, 5]),
      svg = d3.select('#field').append('svg').attr('width', w).attr('height', h);

  console.log(Xscale(200));
  console.log(Yscale(100));
  svg.selectAll('circle').data(dataset).enter().append('circle').attr('cx', function(d){ return Xscale(d[0]); }).attr('cy', function(d){ return Yscale(d[1]); }).attr('r', function(d){ return Rscale(d[1]); });
  svg.selectAll('text').data(dataset).enter().append('text').text(function(d){ return d; }).attr('x', function(d){ return Xscale(d[0]); }).attr('y', function(d){ return Yscale(d[1]); }).attr('fill', '#a1a1a1');
  ;
}

let d3Graph = new D3Graph({
  w: 900,
  h: 500
});
