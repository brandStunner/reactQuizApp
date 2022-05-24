
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Results from './Pages/Results/Results';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name,setName] = useState('')
  const [questions, setQuestions] = useState('')
  const [score, setScore] = useState(0)
   
  const fetchQuestions = async(category='',difficulty='') => {
    const  { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple
      `)
      setQuestions(data.results)
  }
  return (
<BrowserRouter>
  <div className="App" style={{backgroundImage: "url(./backgroundImage.jpg)"}}>
      <Header />

      <Routes>
        <Route   
          path='/home'
          element= {<
          Home name={name}
          setName={setName}
          fetchQuestions={fetchQuestions}
          />} 
         
         />
        <Route   path='/quiz' element=
          {<
            Quiz 
            name={name}
            questions={questions}
            score={score}
            setQuestions={setQuestions}
            setScore={setScore}
            />}
          />
        <Route 
         path='/results'
          element=
          {<
            Results
            name={name}
              score={score} 
          />} 
        />
         
       
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>  
  );


   
}

export default App;
