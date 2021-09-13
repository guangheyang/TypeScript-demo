import { Square } from "./core/Suquare";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
import { SquareGroup } from "./core/viewer/SquareGroup";
import { createTeris } from "./core/Teris";

const teris = createTeris({x: 4, y: 3})

teris.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $('#app'));
})
$('#bottom').on('click', () => {
  teris.centerPoint = {
    x: teris.centerPoint.x,
    y: teris.centerPoint.y + 1
  }
})
$('#right').on('click', () => {
  teris.centerPoint = {
    x: teris.centerPoint.x + 1,
    y: teris.centerPoint.y
  }
})
$('#left').on('click', () => {
  teris.centerPoint = {
    x: teris.centerPoint.x - 1,
    y: teris.centerPoint.y
  }
})

// $('#remove').on('click', () => {
//   sq.viewer?.remove()
// })

// $('#add').on('click', () => {
//   sq.viewer = new SquarePageViewer(sq, $('#app'));
// })