import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import './Questions.css'

const Questions = ({
    current,
    setCurrent,
    questions,
    options,
    correct,
    score,
    setScore,
}) => {
   const [selected, setSelected] = useState();
   const [error, setError] = useState(false);

   const navigate = useNavigate()
   const handleSelect = ( answers) =>{
    if(selected === answers && selected===correct){
        return 'select'
    }else if(selected === answers && selected !== correct ){
        return 'wrong'
    }else if(answers === correct ){
        return 'select'
    }
   };
   const handleCheck = (answers) =>{
       setSelected(answers);
       if(answers === correct) {
           setScore(score + 1)
           setError(false)
       }
   }
   const handleNext = () => {
       if(current > 8){
           navigate('/results')
       } else if (selected){
           setCurrent(current + 1)
           setSelected()
       }else {
           setError('Kindly select an option')
       }
   }

   const handleExit = () =>{
       
   }
  return (
    <div className='question'>
       <h1>Question {current + 1}</h1> 

       <div className='singleQuestion'>
          <h2> {questions[current].question}</h2>

            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {options && options.map((answers) =>  
                <button
                    onClick={() => handleCheck(answers)}
                    className={`singleOption && ${selected && handleSelect(answers)}`}
                    key={answers}
                    disabled={selected}
                >
                    {answers}
                </button>
                )}
            </div>
            <div className='controls'>
                <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    style={{width: 190}}
                    href='/home'
                    onClick={handleExit}
                >
                    Exit
                </Button>
                <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        style={{width: 190}}
                        onClick={handleNext}
                >
                    Next Question
                </Button>
            </div>
       </div>
    </div> 
  )
}

export default Questions