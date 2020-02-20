import React from "react";
import { Button, Grow } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { Score } from "./score";
import "./scoreboard.scss";

export const Scoreboard = props => {
  const [score, setScore] = useState(props.scoringService.currentScore);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(props.scoringService.timeLeft);

  useEffect(() => {
    const sub = props.scoringService.currentScore$.subscribe(score =>
      setScore(score)
    );
    return () => sub.unsubscribe();
  });

  useEffect(() => {
    const sub = props.scoringService.isRunning$.subscribe(isRunning =>
      setIsRunning(isRunning)
    );
    return () => sub.unsubscribe();
  });

  useEffect(() => {
    const sub = props.scoringService.timeLeft$.subscribe(timeLeft =>
      setTimeLeft(timeLeft)
    );
    return () => sub.unsubscribe();
  });

  return (
    <Grow in={true} timeout={1000}>
      <div className="scoreboard">
        <Button
          variant="outlined"
          disabled={isRunning}
          onClick={() => props.scoringService.start()}
        >
          {isRunning ? timeLeft : "Try"}
        </Button>
        <Score value={score} />
      </div>
    </Grow>
  );
};
