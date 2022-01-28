import React,{useState} from 'react';


const QuestionBox=({question,options,selected})=>{
    const[answer,setAnswer]=useState(options);
    const [isChosen,setIsChosen]= useState(false);


    return(
        <div className = 'questionBox'>
            <div className = 'question'>{question}</div>
            {answer.map((item,index)=>{
                return <button key = {index} className='answerBtn' onClick={()=>{
                    if (isChosen) {return}
                    setAnswer([item])
                    selected(item)
                    setIsChosen(true)
                    
                }}>{item}</button>
            })}

        </div>
    )
}

export default QuestionBox