export class Game {
    id: string;
    opponentName: string;
    win: boolean;

    constructor(opponentName: string, win: boolean) {
        this.opponentName = opponentName;
        this.win = win;
    }
}