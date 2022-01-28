import React, { useEffect, useState } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
  playable,
  setFinalMessage,
  finalMessage,
}) => {
  const winOrLose = checkWin(correctLetters, wrongLetters, selectedWord);

  useEffect(() => {
    if (winOrLose === "win") {
      setFinalMessage("Շնորհավոր, Դուք հաղթեցիք");
      setPlayable(false);
    } else if (winOrLose === "lose") {
      setFinalMessage("Ցավոք, Դուք պարտվեցիք");
      setPlayable(false);
    }
  }, [winOrLose]);

  useEffect(() => {
    setPlayable(playable);
  }, []);

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <button onClick={playAgain}>Կրկին խաղալ</button>
      </div>
    </div>
  );
};

export default Popup;
