import React from 'react';


const QuestionBoxResult=({question,options,selected,correct})=>{
  console.log(correct);
  console.log(selected);
    return(
        <div className = 'questionBox'>
            <div className = 'question'>{question}</div>
            {options.map((item,index)=>{
                return <button key = {index} className={item ===correct?'answerBtn correct':item===selected?'answerBtn incorrect':'answerBtn' } >{item}</button>
            })}

        </div>
    )
}

export default QuestionBoxResult