import { Square } from "./core/Suquare";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
import { SquareGroup } from "./core/viewer/SquareGroup";

const group = new SquareGroup([
  {x: 0, y: -1},
  {x: -1, y: 0},
  {x: 0, y: 0},
  {x: 0, y: 1}
], {x: 3, y: 2}, 'red')

group.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $('#app'));
})
$('#bottom').on('click', () => {
  group.centerPoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y + 1
  }
})
$('#right').on('click', () => {
  group.centerPoint = {
    x: group.centerPoint.x + 1,
    y: group.centerPoint.y
  }
})
$('#left').on('click', () => {
  group.centerPoint = {
    x: group.centerPoint.x - 1,
    y: group.centerPoint.y
  }
})

// $('#remove').on('click', () => {
//   sq.viewer?.remove()
// })

// $('#add').on('click', () => {
//   sq.viewer = new SquarePageViewer(sq, $('#app'));
// })