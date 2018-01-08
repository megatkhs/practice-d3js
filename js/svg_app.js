'use strict';

function D3Graph(setting) {
  let dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25],
      svg = d3.select('#field').append('svg').attr('width', setting.w).attr('height', setting.h),
      circles = svg.selectAll('circle').data(dataset).enter().append('circle'),
      barChart = d3.select('#barChart').append('svg').attr('width', setting.w).attr('height', setting.h * 3),
      bars = barChart.selectAll('rect').data(dataset).enter().append('rect'),
      barPadding = 10,
      text = barChart.selectAll('text').data(dataset).enter().append('text');

  circles.attr('cx', function(d, i){
    return (i * 50) + 25;
  })
  .attr('cy', setting.h / 2)
  .attr('r', function(d){
    return d;
  })
  .attr('fill', '#89f20f')
  .attr('stroke', '#5ca804')
  .attr('stroke-width', function(d){
    return d/2;
  });

  bars.attr('x', function(d, i){
    return i * (setting.w / dataset.length);
  })
  .attr('y', function(d){
    return setting.h * 3 - d * 10;
  })
  .attr('width', setting.w / dataset.length - barPadding)
  .attr('height', function(d){
    return d * 10;
  })
  .attr('fill', function(d){
    return 'rgb(224, ' + (d * 5) + ', 0)';
  });

  text.text(function(d){ return d; })
  .attr('x', function(d, i){ return i * (setting.w / dataset.length) + (setting.w / dataset.length - barPadding)/2})
  .attr('y', function(d){ return setting.h * 3 - d * 10 + 25})
  .attr('text-anchor', 'middle')
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'white');
  console.log(dataset);
}

let d3Graph = new D3Graph({
  w: 900,
  h: 100
});
