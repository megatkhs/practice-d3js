'use strict';

function D3Graph(setting) {
  let dataset = [],
  numDataPoints = 50,
  xRange = Math.random() * 1000,
  yRange = Math.random() * 1000;
  for(let i = numDataPoints; i > 0; i--){
    let x = Math.floor(Math.random() * xRange),
    y = Math.floor(Math.random() * yRange);
    dataset.push([x, y]);
  }

  let w = setting.w,
      h = setting.h,
      padding = 50,
      xScale = d3.scaleLinear().domain([0, d3.max(dataset, function(d){ return d[0] })]).range([padding, w - padding]),
      yScale = d3.scaleLinear().domain([0, d3.max(dataset, function(d){ return d[1] })]).range([h - padding, padding]),
      rScale = d3.scaleLinear().domain([0, d3.max(dataset, function(d){ return d[1] })]).range([5, 20]),
      svg = d3.select('#field').append('svg').attr('width', w).attr('height', h),
      rand = d3.select('#random').append('svg').attr('width', w).attr('height', h);

  svg.selectAll('circle').data(dataset).enter().append('circle').attr('cx', function(d){ return xScale(d[0]); }).attr('cy', function(d){ return yScale(d[1]); }).attr('r', function(d){ return rScale(d[1]); });
  svg.selectAll('text').data(dataset).enter().append('text').text(function(d){ return d; }).attr('x', function(d){ return xScale(d[0]); }).attr('y', function(d){ return yScale(d[1]); }).attr('fill', '#a1a1a1');

  let xAxis = d3.axisBottom(xScale).ticks(20, "s"),
      yAxis = d3.axisLeft(yScale).ticks(10);

  svg.append('g').attr('class', 'axis').attr('transform', 'translate(0, ' + (h - padding) + ')').call(xAxis);
  svg.append('g').attr('class', 'axis').attr('transform', 'translate(' + padding + ', 0)').call(yAxis);


}

let d3Graph = new D3Graph({
  w: 900,
  h: 500
});
