"use strict";


function D3Graph() {
  d3.json("asset/data.json", function(json){
    d3.select('#list').selectAll('li').data(json).enter().append('li').text(function(d){
      return d['food'];
    }).style('color', function(d){
      if(d['delisiousness'] > 5){
        return '#e0004a';
      } else {
        return '#0652e6';
      }
    });
    d3.select('#barChart').selectAll('div').data(json).enter().append('div').attr('class', 'bar')
    .style('background', function(d){
      if(d['delisiousness'] > 5){
        return '#e0004a';
      } else {
        return '#0652e6';
      }
    })
    .style('height', function(d){
      return d['delisiousness'] * 20 + 'px';
    });
    console.log(d3.selectAll('p'));
  });

  let randomDatas = [];
  for(let i = 20; i > 0; i--){
    randomDatas.push(Math.random()*10);
  }
  d3.select('#randomData').selectAll('div').data(randomDatas).enter().append('div').attr('class', 'bar')
  .style('background', function(d){
    if(d > 5){
      return '#e0004a';
    } else {
      return '#0652e6';
    }
  })
  .style('height', function(d){
    return d * 20 + 'px';
  });

}

let d3Graph = new D3Graph();
