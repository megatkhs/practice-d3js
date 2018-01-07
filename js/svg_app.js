'use strict';

function D3Graph(setting) {
  let dataset = function(){
      let randData = [];
      for(let i = 20; i > 0; i--){
        randData.push(Math.random()*25);
      }
      return randData;
    },
      svg = d3.select('#field').append('svg').attr('width', setting.w).attr('height', setting.h),
      circles = svg.selectAll('circle').data(dataset).enter().append('circle');

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
}

let d3Graph = new D3Graph({
  w: 1280,
  h: 100
});
