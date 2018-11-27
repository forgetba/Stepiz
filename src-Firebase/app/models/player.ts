export class Player {
    id: string;
    name: string;
    number: number;
    goals: number;

    constructor(name: string, number: number, goals: number) {
        this.name = name;
        this.number = number;
        this.goals = goals;
    }
}