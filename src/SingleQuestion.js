import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// 2 here we set our props
const SingleQuestion = ({title,info}) => {
// here we will set or state for the info props which will be false
  const [showinfo , setShowinfo] = useState(false)
  return (
    <article className ='question'>
      <header>
        <h4>{title}</h4>
        <ul >

            <button className='btn' onClick={()=>{
            setShowinfo(!showinfo)
          }}>
            {showinfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            
          </button>
          {/* here we used the conditional style with css in react so the class is btn and when the status is changed the style become btn-2 */}
          <button className={`btn ${showinfo?'btn-2':""}`} onClick={()=>{
            setShowinfo(!showinfo)}}>
          {showinfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
          </button>       
        </ul> 
                       
      </header>
      {showinfo && <p>{info}</p>}
    </article>
  )
};

export default SingleQuestion;
