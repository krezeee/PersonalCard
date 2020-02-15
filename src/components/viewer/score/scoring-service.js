import { BehaviorSubject } from "rxjs";

export class ScoringService {
  constructor() {
    this.currentScore = 0;
    this.timeLeft = 20;
    this.currentScore$ = new BehaviorSubject(this.currentScore);
    this.timeLeft$ = new BehaviorSubject(this.timeLeft);
    this.isRunning$ = new BehaviorSubject(false);
  }

  score() {
    this.currentScore++;
    this.currentScore$.next(this.currentScore);
  }

  start() {
    this.isRunning$.next(true);
    this.currentScore = 0;
    this.currentScore$.next(this.currentScore);

    const intervalId = setInterval(() => {
      this.timeLeft--;
      this.timeLeft$.next(this.timeLeft);
    }, 1000);

    setTimeout(() => {
      this.stop(intervalId);
    }, 20000);
  }

  stop(intervalId) {
    clearInterval(intervalId);
    this.isRunning$.next(false);
    this.timeLeft = 20;
    this.timeLeft$ = new BehaviorSubject(this.timeLeft);
  }
}
