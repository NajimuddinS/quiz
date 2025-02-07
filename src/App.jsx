import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [min, setMin] = useState(5)
  const timer= useRef(null)

  const mcqQuestions = [
    {
      id: 1,
      question: "What is React primarily used for?",
      options: ["Data Science", "Mobile Apps", "Building User Interfaces", "Networking"],
      correctAnswer: 3, // "Building User Interfaces"
    },
    {
      id: 2,
      question: "Which hook is used to manage state in a functional component?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: 1, // "useState"
    },
    {
      id: 3,
      question: "Which lifecycle method is used for side effects in functional components?",
      options: ["componentDidMount", "useEffect", "shouldComponentUpdate", "componentWillUnmount"],
      correctAnswer: 2, // "useEffect"
    },
    {
      id: 4,
      question: "How do you update state based on the previous state in React?",
      options: [
        "setState(newValue)",
        "setState(prevState => newValue)",
        "setState(() => newValue)",
        "setState(value, prevState)"
      ],
      correctAnswer: 2, // "setState(prevState => newValue)"
    },
    {
      id: 5,
      question: "What is the correct way to pass data from parent to child component?",
      options: ["State", "Props", "Context", "Ref"],
      correctAnswer: 2, // "Props"
    }
  ];
  
  function submit() {

  }

  function timer(){
    if (timer.current==null){
      timer.current=setInterval(() => {
        if (min<0){
          setMin((min)=>min-1)
        }
      }, 60000);
    }
  }

  timer()
  
  return (
    <>
      <div>
        <h1>Quiz</h1>
        {mcqQuestions.map((questions)=> {
            <div>
              <h2>{questions.question}</h2>
              <h1>{min}:</h1>
              <ol>
                <li>{questions.options[0]}</li>
                <input type="radio" name="first" id="first" />
                <li>{questions.options[1]}</li>
                <input type="radio" name="second" id="second" />
                <li>{questions.options[2]}</li>
                <input type="radio" name="third" id="third" />
                <li>{questions.options[3]}</li>
                <input type="radio" name="fourth" id="fourth" />
              </ol>
              <button onClick={submit} type="submit"></button>
            </div>
          })}
      </div>
    </>
  )
}

export default App
