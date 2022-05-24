import './Quiz.css'
import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Questions from '../../components/Questions/Questions'

const Quiz = ({name,questions, score,setScore}) => {
  const [options, setOptions] = useState()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    console.log(questions)
    setOptions(
      questions && 
      handleShuffle([
        questions[current]?.correct_answer,
        ...questions[current]?.incorrect_answers,
      ])

    )

  },[questions, current])
  console.log(options)
  const handleShuffle = (allFourOptions) => {
    return allFourOptions.sort(() => Math.random() - 0.5)
  }
  return (
    <div className='quiz-introduction'>
      <span className='intro-span'>Let's get started {name} </span>
      {
       questions? 
       ( 
        <>
        <div className='quiz-information'>
          <span>{questions[current].category}</span>
          <span>Score: {score}</span>  
        </div> 

        <Questions 
          current={current}
          setCurrent={setCurrent}
          questions={questions}
          options={options}
          correct={questions[current]?.correct_answer}
          score={score}
          setScore={setScore}
          

        />
        </>
        )
        : (
        <CircularProgress 
          style={{margin: 100}}
        
        />
        )
      }

    </div>
  )
}

export default Quiz