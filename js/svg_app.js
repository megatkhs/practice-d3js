'use strict';

function D3Graph(setting) {
  let dataset = [10, 20, 17, 20, 23, 15, 15, 10, 10, 16, 26, 13, 3],
      svg = d3.select('#field').append('svg').attr('width', setting.w).attr('height', setting.h),
      circles = svg.selectAll('circle').data(dataset).enter().append('circle'),
      barChart = d3.select('#barChart').append('svg').attr('width', setting.w).attr('height', setting.h * 3),
      bars = barChart.selectAll('rect').data(dataset).enter().append('rect'),
      barPadding = 10;

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
  });

  console.log(dataset);
}

let d3Graph = new D3Graph({
  w: 1280,
  h: 100
});
