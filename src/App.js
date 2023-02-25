import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './SingleQuestion';
function App() {
  // 1  here we will display all questions in the data array
  const [questions , setQuestions ] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>questions and answers</h3>
        <section className='info'>
          {questions.map((question)=>{
            return <SingleQuestion key = {question.id} {...question}/> 

          })}

        </section>


      </div>

    </main>

  )
}

export default App;
