export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  return Array.from(
    Array(STAGE_HEIGHT).fill(Array(STAGE_WIDTH).fill([0, "clear"]))
  );
};

export const checkCollision = (player, stage, { x, y }) => {
  for (let i = 0; i < player.figure.length; i += 1) {
    for (let j = 0; j < player.figure[i].length; j += 1) {
      if (player.figure[i][j] !== 0) {
        if (
          !stage[i + player.pos.y + y] ||
          !stage[i + player.pos.y + y][j + player.pos.x + x] ||
          stage[i + player.pos.y + y][j + player.pos.x + x][1] !== "clear"
        ) {
          return true;
        }
      }
    }
  }
};
