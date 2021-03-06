import React, { useState, useEffect, useCallback } from "react";
import Header from "../Header";
import Figure from "../Figure";
import WrongLetters from "../WrongLetters";
import Word from "../Word";
import Popup from "../Popup";
import Notification from "../Notification";
import { showNotification as show } from "../../helpers/helpers";

import "../../Styles.css";

const words = ["աստղ", "ապագա", "հրաշք", "նապաստակ"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function HangMan() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [finalMessage, setFinalMessage] = useState("");

  const handleKeydown = useCallback(
    (event) => {
      const { key, keyCode } = event;
      if (
        (playable && keyCode >= 65 && keyCode <= 93) /* a-z, [, ], = */ ||
        (keyCode >= 48 && keyCode <= 57) /* 0-9 */ ||
        keyCode === 220 /* \ */
      ) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (correctLetters.includes(letter)) {
            show(setShowNotification);
          } else {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          }
        } else {
          if (wrongLetters.includes(letter)) {
            show(setShowNotification);
          } else {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          }
        }
      }
    },
    [correctLetters, wrongLetters, playable]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  function playAgain() {
    setPlayable(true);
    setFinalMessage("");
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div className="hangManBody">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playable={playable}
        playAgain={playAgain}
        setFinalMessage={setFinalMessage}
        finalMessage={finalMessage}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default HangMan;
