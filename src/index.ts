import { Square } from "./core/Suquare";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
const sq = new Square();
sq.viewer = new SquarePageViewer(sq, $('#app'));
sq.color = 'red'
sq.point = {
  x: 3,
  y: 5
}

$('#bottom').on('click', () => {
  sq.point = {
    x: 3,
    y: sq.point.y + 1
  }
})

$('#remove').on('click', () => {
  sq.viewer?.remove()
})

$('#add').on('click', () => {
  sq.viewer = new SquarePageViewer(sq, $('#app'));
})