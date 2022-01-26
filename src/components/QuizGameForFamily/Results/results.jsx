import React from'react'
import './results.css'


const Result = ({score,playAgain,showAnswers})=>{
    return(
    <div className ='score-board'>
        <div className='score'>You scored {score} / 5 correct answers</div>
        <button className='playAgainBtn' onClick={playAgain}> Play Again!</button>
        <button className='showAnswers' onClick={showAnswers}> Show your Answers!</button>
    </div>
    )

}
export default Result