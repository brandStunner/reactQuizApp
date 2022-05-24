import { Button } from '@material-ui/core';
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Results.css'

const Results = ({name,score}) => {
    const navigate = useNavigate()
   
    useEffect(() => {
      if (!name){ 
          navigate('/')
      }
    }, [name,navigate])
    
  return (
    <div className='results'>
      <span className='quiz-title-2'>
        {name}, your final score is : {score}
            
      </span>
        <Button
              variant='contained'
              color='secondary'
              size='large' 
              href='/home'
              style={{marginTop: 20 ,alignSelf:'center'}}
          >
            
              Return to Home
        </Button>
    </div> 
  )
}

export default Results