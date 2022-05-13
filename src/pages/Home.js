import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import QuizPage from './QuizPage'


function Home() {
  return (
    <div>
      
           <Navbar />
           <div className='intro'>
           <div className='quiz-side'>
               <div className=''>
               <h3>All quiz categories</h3>
               </div>
       
        <QuizPage />

        </div>
     
      
        <div className='instr'>
            <div className='test'>
            <h2>Welcome to the Quiz app</h2>
        <p className='test-know'>Test your knowledge in different web dev technologies</p>
        
        <h3 className='dir'>How To get started</h3>
        <div className='steps'>
            <div className='step'>
            <h3>Step 1: </h3>
                <span>You first need to be authorized by creating a user account</span>

            </div>
            <div className='step'>
            <h3>Step 2: </h3>
                <span>On the menu on the left side, select quiz type e.g Node, Once you are redirected to quiz page go ahead and start answering questions</span>
            </div>

            <div className='step'>
            <h3>Step 4:
                </h3> <span>Not know the answer, don't panick just answer what you can and feel free to skip questions</span>
            </div>
            <div className='step'>
            <h3>Step 4: 
                </h3><span>Check the number of questins as you move to the next question , when you hit the last question a submitting button appears and you can go ahead and submit</span>
            </div>
        </div>
        
   
       
       
        <h3 className='sub'>Once submitted, wait for your grades and check them</h3>
        <h2 className='enjoy'>Enjoy !!!</h2>
            </div>
       

        </div>
        
     
           </div>
        
       
    </div>
  )
}

export default Home