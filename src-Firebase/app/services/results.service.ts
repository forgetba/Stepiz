import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FirestoreService } from "./firestore.service";
import { Game } from "../models/game";

@Injectable()
export class ResultsService {

    savedGames: Observable<Array<Game>>;
    games: Array<Game>;
    game: Game;

    constructor(private firestoreService: FirestoreService) {
    }

    // Saved games
    public saveGames(games: Observable<Array<Game>>): void {
        this.savedGames=games;
    }

    // Setters
    public setGames(): void {
        this.firestoreService.queryCollection("games").then(gameslist => {
            this.games=gameslist;
        });
    }

    public setPlayer(id: string): void {
        this.firestoreService.queryDoc("games", id).then(game => {
            this.game=game;
        });
    }

    // Async Promises - it retrieves the data once it is loaded from the database
    public async getGames(): Promise<Array<Game>> {
        const games = await this.firestoreService.queryCollection("games");
        return games;
    }

    public async getPlayer(id: string): Promise<Game> { 
        const game = await this.firestoreService.queryDoc("games",id);
        return game;
    }

    // Observables
    public fetchPlayer(id: string): Observable<Game> {
        return this.firestoreService.fetchDoc("games", id);
    }

    public fetchGames(cond?: string): Observable<Array<Game>> {
        console.log(cond);
        if (this.savedGames==undefined) {
            return this.firestoreService.fetchCollection("games", cond);
        } else {
            return this.savedGames;
        }
    }

    // Add document
    public addGame(game: Game): void {
        this.firestoreService.addDocToCollection("games", game);
        this.setGames();
    }

}