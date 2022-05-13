import React, {useRef} from 'react'


function QuestInquizAdm({qn}) {
    const QuizqnRef = useRef();
    

    return (
        <>
            <h1>questions</h1>
            <div ref={QuizqnRef}>
                <p>
                {qn.question}

                </p>
                <button>edit</button>
                <button>delete</button>

            </div>

        </>
    )
}

export default QuestInquizAdm