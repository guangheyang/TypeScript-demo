import { SquareGroup } from "../SquareGroup";
import { GameStatus, GameViewer } from "../types";
import { SquarePageViewer } from "./SquarePageViewer";
import $ from 'jquery'
import { Game } from "../Game";
import { GameConfig } from "../GameConfig";
import PageConfig from "./PageConfig";
export class GamePageViewer implements GameViewer {
  private nextDom = $('#next')
  private panelDom = $('#panel')
  private scoreDom = $('#score')
  private messageDom = $('#message')
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
        case ' ':
          if (game.gameStatus === GameStatus.playing) {
            game.pause()
          } else {
            game.start()
          }
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
  showScore(score: number): void {
    this.scoreDom.html(score.toString())
  }
  onGamePause(): void {
    this.messageDom.css({
      display: 'flex'
    })
    this.messageDom.find('p').html('游戏暂停')
  }
  onGameStart(): void {
    this.messageDom.css({
      display: 'none'
    })
  }
  onGameOver(): void {
    this.messageDom.css({
      display: 'flex'
    })
    this.messageDom.find('p').html('游戏结束')
  }
}