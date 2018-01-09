'use strict';

function D3Graph(setting) {
  let dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25],
      cnt = dataset.length,  // 20
      w = setting.w,  // svgのwidth
      h = setting.h,  // svgのheight
      svg = d3.select('#field').append('svg').attr('width', w).attr('height', h);  // svgを生成

  // 棒グラフとラベルの生成
  let bars = svg.selectAll('svg').data(dataset).enter().append('rect'),
      texts = svg.selectAll('svg').data(dataset).enter().append('text');

  // scale v3.xとは書き方が違うのでどこかでおさらいすべき
  let xScale = d3.scaleBand().domain(d3.range(dataset.length)).range([0, w]).paddingInner(0.25),
      yScale = d3.scaleLinear().domain([d3.max(dataset), 0]).range([h, 0]),
      cScale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([10, 150]);

  bars.attr('x', function(d,i){
    return xScale(i);
  })
  .attr('y', h)
  .attr('width', xScale.bandwidth())
  .attr('height', 0)
  .attr('fill', function(d){
    return 'rgb(255, 255, 255)'
  })
  .transition()
  .delay(function(d,i){
    return i * 100;
  })
  .duration(1000)
  .ease(d3.easeExp)
  .attr('y', function(d){
    return h - yScale(d);
  })
  .attr('height', function(d){
    return yScale(d);
  })
  .attr('fill', function(d){
    return 'rgb(255, ' + Math.floor(cScale(d)) + ', 0)'
  });

  texts.text(function(d){
    return d;
  })
  .attr('x', function(d,i){
    return xScale(i) + xScale.bandwidth() / 2;
  })
  .attr('y', function(d){
    return h - yScale(d) + 100;
  })
  .attr('text-anchor', 'middle')
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'rgba(255,255,255,0)')
  .transition()
  .delay(function(d,i){
    return i * 100 + 200;
  })
  .duration(1000)
  .ease(d3.easeExp)
  .attr('y', function(d){
    return h - yScale(d) + 24;
  })
  .attr('fill', 'white');
  console.log(dataset);

  d3.select('svg').on('click', function(){
    dataset = [];
    for(let i = cnt; i > 0; i--){
      let num = Math.floor(Math.random() * Math.floor(Math.random() * 100));
      dataset.push(num);
    }
    yScale.domain([d3.max(dataset), 0]);
    cScale.domain([0, d3.max(dataset)]);
    console.log(dataset);
    svg.selectAll('rect')
       .data(dataset)
       .transition()
       .duration(1000)
       .ease(d3.easeExp)
       .attr('y', function(d){
         return h - yScale(d);
       })
       .attr('height', function(d){
         return yScale(d);
       })
       .attr('fill', function(d){
         return 'rgb(255, ' + Math.floor(cScale(d)) + ', 0)'
       });
    svg.selectAll('text')
       .data(dataset)
       .transition()
       .duration(1000)
       .ease(d3.easeExp)
       .attr('y', function(d){
         return h - yScale(d) + 24;
       })
       .attr('fill', 'white')
       .text(function(d){
         return d;
       });

  })
}

let d3Graph = new D3Graph({
  w: 900,
  h: 500
});
