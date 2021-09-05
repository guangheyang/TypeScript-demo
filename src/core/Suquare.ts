import { IViewer, Point } from "./types"

/**
 * 小方块
 */
export class Square {
  // private _point: Point
  // private _color: string

  // public get x() {
  //   return this._x
  // }
  // public setX(val: number) {
  //   this._x = val
  // }

  // public get y() {
  //   return this._y
  // }
  // public set y(val) {
  //   this._y = val
  // }

  // 属性： 显示者
  private _viewer?: IViewer

  public get viewer() {
    return this._viewer
  }

  public set viewer(v) {
    this._viewer = v
  }

  public get point() {
    return this._point
  }
  public set point(val) {
    this._point = val
    // 完成显示
    if (this._viewer) {
      this._viewer.show()
    }
  }

  public get color() {
    return this._color
  }

  constructor(private _point: Point, private _color: string) {}
}