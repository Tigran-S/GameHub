import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = (newStage) =>
      newStage.reduce((acc, row) => {
        if (row.every((cell) => cell[0] !== 0)) {
          setRowsCleared((prev) => prev + 1);
          acc.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return acc;
        }
        acc.push(row);
        return acc;
      }, []);
    const updateStage = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      player.figure.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0 && newStage[y + player?.pos?.y]) {
            newStage[y + player?.pos?.y][x + player?.pos?.x] = [
              value,
              `${player?.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };
    setStage((prev) => updateStage(prev));
  }, [player.collided, player.pos.x, player.pos.y, player.figure, resetPlayer]);
  return [stage, setStage, rowsCleared];
};
