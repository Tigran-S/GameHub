import { useCallback, useState, useEffect } from "react";

export const useGameStatus = (rowsCLeared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (rowsCLeared > 0) {
      setScore(score + linePoints[rowsCLeared - 1] * (level + 1));
      setRows((prev) => prev + rowsCLeared);
    }
  }, [level, linePoints, rowsCLeared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCLeared, score]);
  return [score, setScore, rows, setRows, level, setLevel];
};
