import { Point, Shape } from "./types";
import { getRandom } from "./utils";
import { SquareGroup } from "./SquareGroup";


export class TShpae extends SquareGroup {
  constructor(
    _centerPoint: Point,
    _color: string
  ) {
    super([
        {x: -1, y: 0},
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 0, y: -1}
      ], _centerPoint, _color)
  }
}
// export const TShpae: Shape = [
//   {x: -1, y: 0},
//   {x: 0, y: 0},
//   {x: 1, y: 0},
//   {x: 0, y: -1}
// ]

export class LShape extends SquareGroup {
  constructor(
    _centerPoint: Point,
    _color: string
  ) {
    super([
      {x: -2, y: 0},
      {x: -1, y: 0},
      {x: 0, y: 0},
      {x: 0, y: -1}
    ], _centerPoint, _color)
  }
}
// export const LShape: Shape = [
//   {x: -2, y: 0},
//   {x: -1, y: 0},
//   {x: 0, y: 0},
//   {x: 0, y: -1}
// ]

export class LMirrorShape extends SquareGroup {
  constructor(
    _centerPoint: Point,
    _color: string
  ) {
    super([
      {x: 2, y: 0},
      {x: 1, y: 0},
      {x: 0, y: 0},
      {x: 0, y: -1}
    ], _centerPoint, _color)
  }
}
// export const LMirrorShape: Shape = [
//   {x: 2, y: 0},
//   {x: 1, y: 0},
//   {x: 0, y: 0},
//   {x: 0, y: -1}
// ]

export class SShape extends SquareGroup {
  constructor(
    _centerPoint: Point,
    _color: string
  ) {
    super([
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 0, y: 1},
      {x: -1, y: 1}
    ], _centerPoint, _color)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}
// export const SShape: Shape = [
//   {x: 0, y: 0},
//   {x: 1, y: 0},
//   {x: 0, y: 1},
//   {x: -1, y: 1}
// ]

export class SMirrorShape extends SquareGroup {
  constructor(
    _centerPoint: Point,
    _color: string
  ) {
    super([
      {x: 0, y: 0},
      {x: -1, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 1}
    ], _centerPoint, _color)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}
// export const SMirrorShape: Shape = [
//   {x: 0, y: 0},
//   {x: -1, y: 0},
//   {x: 0, y: 1},
//   {x: 1, y: 1}
// ]

export class SquareShape extends SquareGroup {
  constructor(
    _centerPoint: Point,
    _color: string
  ) {
    super([
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 1, y: 1}
    ], _centerPoint, _color)
  }
  afterRotateShape() {
    return this.shape
  }
}
// export const SquareShape: Shape = [
//   {x: 0, y: 0},
//   {x: 0, y: 1},
//   {x: 1, y: 0},
//   {x: 1, y: 1}
// ]

export class LineShape extends SquareGroup {
  constructor(
    _centerPoint: Point,
    _color: string
  ) {
    super([
      {x: -1, y: 0},
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 0}
    ], _centerPoint, _color)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}
// export const LineShape: Shape = [
//   {x: -1, y: 0},
//   {x: 0, y: 0},
//   {x: 1, y: 0},
//   {x: 2, y: 0}
// ]

export const shapes = [
  TShpae,
  LShape,
  LMirrorShape,
  SShape,
  SMirrorShape,
  SquareShape,
  LineShape
]

export const colors = [
  'red',
  '#fff',
  'green',
  'blue',
  'yellow',
  'orange',
  '#f40'
]
/**
 * 随机产生一个俄罗斯方块（颜色随机、形状随机）
 * @param centerPoint
 * 
 */
export function createTeris(centerPoint: Point) {
  let index = getRandom(0, shapes.length)
  const shape = shapes[index]
  index = getRandom(0, colors.length)
  const color = colors[index]
  return new shape(centerPoint, color)
}