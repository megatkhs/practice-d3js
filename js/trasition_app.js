'use strict';

function D3Graph(setting) {
  let dataset = [[5, 20], [480, 90], [250, 50], [100, 33],  [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]],
      w = setting.w,
      h = setting.h,
      svg = d3.select('#field').append('svg').attr('width', w).attr('height', h);

}

let d3Graph = new D3Graph({
  w: 900,
  h: 500
});
