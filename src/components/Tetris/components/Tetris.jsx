import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import { createStage, checkCollision } from "../gameHelpers";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";

import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import { StartButton } from "./styles/StartButton";
import { Display } from "./styles/Display";
import { Cell } from "./styles/Cell";
import { Figures } from "./figures";
import { Platform } from "./styles/Platform";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = (e) => {
    if (!gameOver) {
      if (e.keyCode === 37) {
        e.preventDefault();
        movePlayer(-1);
      } else if (e.keyCode === 39) {
        e.preventDefault();
        movePlayer(1);
      } else if (e.keyCode === 40) {
        e.preventDefault();
        dropPlayer();
      } else if (e.keyCode === 38) {
        e.preventDefault();
        playerRotate(stage);
      }
    }
  };
  useInterval(() => {
    drop();
  }, dropTime);
  useEffect(() => {
    if (!Number(localStorage.getItem("highestScore"))) {
      localStorage.setItem("highestScore", score);
    }
    if (Number(localStorage.getItem("highestScore")) <= score) {
      localStorage.setItem("highestScore", score);
    }
  }, [score]);
  useEffect(() => {
    if (gameOver)
      toast.error("Game Over!", {
        position: toast.POSITION.TOP_CENTER,
      });
  }, [gameOver]);
  return (
    <>
      <ToastContainer />
      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
        onKeyUp={keyUp}
      >
        <StyledTetris>
          <Platform width={stage[0].length} height={stage.length}>
            {stage.map((el) =>
              el.map((cell, i) => (
                <Cell key={i} color={Figures[cell[0]].color} />
              ))
            )}
          </Platform>
          <aside>
            {gameOver ? (
              <Display gameOver={gameOver}>"Game Over"</Display>
            ) : (
              <div>
                <Display>{`Highest Score: ${localStorage.getItem(
                  "highestScore"
                )}`}</Display>
                <Display>{`Score: ${score}`}</Display>
                <Display>{`Rows: ${rows}`}</Display>
                <Display>{`Level: ${level}`}</Display>
              </div>
            )}
            <StartButton onClick={startGame}>Start game</StartButton>
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  );
};

export default Tetris;
