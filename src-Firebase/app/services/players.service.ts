import { Injectable, NgZone } from "@angular/core";
import { Player } from "../models/player";
import { Observable } from "rxjs";
import { FirestoreService } from "./firestore.service";

@Injectable()
export class PlayersService {

    savedPlayers: Observable<Array<Player>>;
    players: Array<Player>;
    player: Player;

    constructor(private firestoreService: FirestoreService, private ngZone: NgZone) {
    }


    // Saved players
    public savePlayers(players: Observable<Array<Player>>): void {
        this.savedPlayers=players;
    }

    // Setters
    public setPlayers(): void {
        this.firestoreService.queryCollection("players").then(playerslist => {
            this.players=playerslist;
        });
    }

    public setPlayer(id: string): void {
        this.firestoreService.queryDoc("players", id).then(player => {
            this.player=player;
        });
    }

    // Async Promises - it retrieves the data once it is loaded from the database
    public async getPlayers(): Promise<Array<Player>> {
        const players = await this.firestoreService.queryCollection("players");
        return players;
    }

    public async getPlayer(id: string): Promise<Player> { 
        const player = await this.firestoreService.queryDoc("players",id);
        return player;
    }

    // Observables
    public fetchPlayer(id: string): Observable<Player> {
        return this.firestoreService.fetchDoc("players", id);
    }

    public fetchPlayers(cond?: string): Observable<Array<Player>> {
        console.log(cond);
        if (this.savedPlayers==undefined) {
            return this.firestoreService.fetchCollection("players", cond);
        } else {
            return this.savedPlayers;
        }
        
    }

    // Add document
    public addPlayer(player: Player): void {
        this.firestoreService.addDocToCollection("players", player);
        this.setPlayers();
    }

}