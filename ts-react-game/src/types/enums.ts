export enum ChessType {
    none,
    red,
    black
}

// export enum nextChess {
//     red = ChessType.red,
//     block = ChessType.black
// }

export enum GameStatus {
    gaming, // 游戏进行中
    redWin, // 红方胜
    blackWin, // 黑方胜
    equal // 平局
}