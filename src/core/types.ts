import { Game } from "./Game";
import { SquareGroup } from "./SquareGroup";

export interface Point {
  readonly x: number,
  readonly y: number
}

export interface IViewer {
  /**
   * 显示
   */
  show(): void
  /**
   * 移除
   */
  remove(): void
}

/**
 * 形状
*/
export type Shape = Point[]

export enum MoveDirection {
  left,
  right,
  down
}

export enum GameStatus {
  init, // 未开始
  playing, // 进行中
  pause, // 暂停
  over // 游戏结束
}

export interface GameViewer {
  /**
   * @param teris 下一个方块对象
   */
  showNext(teris: SquareGroup): void

  /**
   * @params 切换下一个方块
   */
  switchSquare(teris: SquareGroup): void

  /**
   * 完成界面初始化
   */
  init(game: Game): void
  /**
   * 显示分数
   */
  showScore(score: number): void
  /**
   * 暂停时触发的事件
   */
  onGamePause(): void
  /**
   * 暂停时触发的事件
   */
   onGameStart(): void
  /**
   * 暂停时触发的事件
   */
   onGameOver(): void
}