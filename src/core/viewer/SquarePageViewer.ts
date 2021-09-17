import { Square } from "../Suquare";
import { IViewer } from "../types";
import $ from 'jquery'
import PageConfig from "./PageConfig";

/**
 * 显示小方块在页面上
*/
export class SquarePageViewer implements IViewer {
  private dom?: JQuery<HTMLElement>
  private isRemove: boolean = false
  constructor(
    private square: Square,
    private container: JQuery<HTMLElement>
  ) {

  }
  show(): void {
    if (this.isRemove) return
    if (!this.dom) {
      this.dom = $('<div>').css({
        position: 'absolute',
        width: PageConfig.SquareSize.width,
        height: PageConfig.SquareSize.height,
        border: '1px solid #ccc',
        baxSizing: 'border-box'
      }).appendTo(this.container)
    }
    this.dom.css({
      left: this.square.point.x * PageConfig.SquareSize.width,
      top: this.square.point.y * PageConfig.SquareSize.height,
      backgroundColor: this.square.color
    })
  }
  remove(): void {
    if (this.dom) {
      this.dom.remove()
      this.isRemove = true
    }
  }
}