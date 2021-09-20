import { SquareGroup } from "../SquareGroup";
import { GameViewer } from "../types";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from 'jquery'
import { Game } from "../Game";
import { GameConfig } from "../GameConfig";
import PageConfig from "./PageConfig";
export class GamePageViewer implements GameViewer {
  private nextDom = $('#next')
  private panelDom = $('#panel')
  init(game: Game): void {
    // 1.设置宽高
    this.panelDom.css({
      width: GameConfig.panelSize.width * PageConfig.SquareSize.width,
      height: GameConfig.panelSize.height * PageConfig.SquareSize.height
    })
    this.nextDom.css({
      width: GameConfig.nextSize.width * PageConfig.SquareSize.width,
      height: GameConfig.nextSize.height * PageConfig.SquareSize.height
    })
    // 2.注册键盘事件
    $(document).on('keydown', (e) => {
      console.log(e.key)
      switch (e.key) {
        case 'ArrowLeft':
          game.controlLeft()
          break;
        case 'ArrowRight':
          game.controlRight()
          break;
        case 'ArrowDown':
          game.controlDown()
          break;
        case 'ArrowUp':
          game.controlRotate()
          break;
      }
    })
  }
  showNext(teris: SquareGroup): void {
    teris.squares.forEach(sq => {
      sq.viewer = new SquarePageViewer(sq, this.nextDom)
    })
  }
  switchSquare(teris: SquareGroup): void {
    teris.squares.forEach(sq => {
      sq.viewer?.remove()
      sq.viewer = new SquarePageViewer(sq, this.panelDom)
    })
  }
  
}