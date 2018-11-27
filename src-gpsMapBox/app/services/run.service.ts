import { Injectable } from "@angular/core";

@Injectable()
export class RunService {
    distance: number;
    time: number;
    speed: number;
    pace: number;

    setDistance(distance: number): void {
        this.distance = distance;
    }

    getDistance(): number {
        return this.distance;
    }

    setTime(time: number): void {
        this.time = time;
    }

    getTime(): number {
        return this.time;
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }

    getSpeed(): number {
        return this.speed;
    }

    setPace(pace: number): void {
        this.pace = pace;
    }

    getPace(): number {
        return this.pace;
    }

    reset(): void {
        this.distance=0;
        this.time=0;
        this.speed=0;
        this.pace=0;
    }

}