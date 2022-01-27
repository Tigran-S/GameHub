import { useCallback, useState } from "react";

import { Figures, figureGenerator } from "../components/figures";
import { checkCollision, STAGE_WIDTH } from "./../gameHelpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    figure: Figures[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, i) => matrix.map((col) => col[i]));
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    console.log("asda");
  };

  const playerRoate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.figure = rotate(clonedPlayer.figure, dir);
    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.figure[0].length) {
        rotate(clonedPlayer.figure, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      figure: figureGenerator().shape,
      collided: false,
    });
  }, []);
  return [player, updatePlayerPos, resetPlayer, playerRoate];
};
