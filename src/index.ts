import { Square } from "./core/Suquare";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
import { SquareGroup } from "./core/viewer/SquareGroup";
import { createTeris } from "./core/Teris";
import { TerisRule } from "./core/TerisRule";
import { MoveDirection } from "./core/types";

const teris = createTeris({x: 4, y: 3})

teris.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $('#app'));
})
$('#bottom').on('click', () => {
  // const targetPoint = {
  //   x: teris.centerPoint.x,
  //   y: teris.centerPoint.y + 1
  // }
  TerisRule.moveDirectly(teris, MoveDirection.down)
})
$('#right').on('click', () => {
  // teris.centerPoint = {
  //   x: teris.centerPoint.x + 1,
  //   y: teris.centerPoint.y
  // }
  TerisRule.move(teris, MoveDirection.right)
})
$('#left').on('click', () => {
  // teris.centerPoint = {
  //   x: teris.centerPoint.x - 1,
  //   y: teris.centerPoint.y
  // }
  TerisRule.move(teris, MoveDirection.left)
})

// $('#remove').on('click', () => {
//   sq.viewer?.remove()
// })

// $('#add').on('click', () => {
//   sq.viewer = new SquarePageViewer(sq, $('#app'));
// })