import{ React, useState} from 'react'
import "./Home.css"
import {MenuItem,TextField,Button} from "@material-ui/core"
import Categories from '../../Data/Categories'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const Home = ({name, setName, fetchQuestions}) => {
    const [category, setCategory] = useState('')
    const [difficulty,setDifficulty] = useState('')
    const [error,setError] = useState(false)

    const navigate = useNavigate();
    const handleSubmit =() =>{
        if(!name||!category|| !difficulty){
            setError(true)
             return
        }
        else {
            setError(false)
            fetchQuestions(category,difficulty)
            navigate('/quiz')
        }
    }
  return (
    <div className='home-page'>
        <div className='home-settings'>
            <span style={{fontSize: 25}}>Quiz Setting</span>
            <img src='quizhome.svg' alt='quiz home' className='banner'/>
            <div className='option-selection'>
                
                <TextField 
                    label="Input Your name"
                    variant='filled'
                    style={{marginBottom: 25}}
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />

                <TextField
                    select 
                    label = "Select Category"
                    variant='filled'
                    style={{marginBottom: 25}}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                {Categories.map((cat)=>(
                    <MenuItem
                    key={cat.category}
                    value={cat.value}
                    >
                        {cat.category}
                    </MenuItem>
                ))}
                    
                    
                </TextField> 

                <TextField 
                    select
                    label='Select Difficulty'
                    value={difficulty}
                    variant='filled'
                    style={{marginBottom: 25}}
                    color='primary'
                    onChange={(e) => setDifficulty(e.target.value)}
                    
                >
                <MenuItem 
                    key='Easy'
                    value='easy'
                >
                    Easy
                </MenuItem>
                <MenuItem 
                    key='Medium'
                    value='medium'
                >
                    Medium
                </MenuItem>
                <MenuItem 
                    key='Difficult'
                    value='difficult'
                >
                    Difficult
                </MenuItem>
                
                </TextField>  
                <Button 
                    variant='outlined' 
                    color='secondary'
                    size='large'
                    onClick={handleSubmit}
                >
                    Start
                </Button>
                {error && <ErrorMessage>Kindly fill all fields</ErrorMessage>}
            </div>
        </div>
       
    </div>
  )
}

export default Home