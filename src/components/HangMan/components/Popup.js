import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let playable = true;
  const winOrLose = checkWin(correctLetters, wrongLetters, selectedWord);

  if(winOrLose === 'win') {
    finalMessage = 'Շնորհավոր, Դուք հաղթեցիք';
    playable = false;
  } else if(winOrLose === 'lose' ) {
    finalMessage = 'Ցավոք, Դուք պարտվեցիք';
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  }, []);

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <button onClick={playAgain}>Կրկին խաղալ</button>
      </div>
    </div>
  )
}

export default Popup