'use strict';

function D3Graph(setting) {
  let dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25],
      datacnt = dataset.length,
      w = setting.w,
      h = setting.h,
      svg = d3.select('#field').append('svg').attr('width', w).attr('height', h);

  let bars = svg.selectAll('svg').data(dataset).enter().append('rect'),
      barPadding = 10,
      unit = 15,
      texts = svg.selectAll('svg').data(dataset).enter().append('text');

  let xScale = d3.scaleBand().domain(d3.range(dataset.length)).range([0, w]).paddingInner(0.25),
      yScale = d3.scaleLinear().domain([d3.max(dataset), 0]).range([h, 0]);
  bars.attr('x', function(d,i){
    return xScale(i);
  })
  .attr('y', function(d){
    return h - yScale(d);
  })
  .attr('width', xScale.bandwidth())
  .attr('height', function(d){
    return yScale(d);
  })
  .attr('fill', function(d){
    return 'rgb(255, ' + (d * 6) + ', 0)'
  });

  texts.text(function(d){
    return d;
  })
  .attr('x', function(d,i){
    return xScale(i) + xScale.bandwidth() / 2;
  })
  .attr('y', function(d){
    return h - yScale(d) + 24;
  })
  .attr('text-anchor', 'middle')
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'white');
  console.log(dataset);

  d3.select('svg').on('click', function(){
    dataset = [11, 12, 15, 20, 18, 17, 16, 18, 23, 25, 5, 10, 13, 19, 21, 25, 22, 18, 15, 13];
    console.log(dataset);
    svg.selectAll('rect')
       .data(dataset)
       .transition()
       .attr('y', function(d){
         return h - yScale(d);
       })
       .attr('height', function(d){
         return yScale(d);
       })
       .attr('fill', function(d){
         return 'rgb(255, ' + (d * 6) + ', 0)'
       });
    svg.selectAll('text')
       .data(dataset)
       .transition()
       .text(function(d){
         return d;
       })
       .attr('y', function(d){
         return h - yScale(d) + 24;
       });
  })
}

let d3Graph = new D3Graph({
  w: 900,
  h: 500
});
