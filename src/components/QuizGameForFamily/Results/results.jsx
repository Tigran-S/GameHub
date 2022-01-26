import React from'react'
import './results.css'


const Result = ({score,playAgain})=>{
    return(
    <div className ='score-board'>
        <div className='score'>You scored {score} / 5 correct answers</div>
        <button className='playAgainBtn' onClick={playAgain}> Play Again!</button>
    </div>
    )

}
export default Result