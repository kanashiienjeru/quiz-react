import React, {useState} from 'react'
import './styles.css'

const questions = [
  {
    title: '2+2',
    variants: ['4', '8', '10'],
    current: 0,
  },
  {
    title: 'Сколько месяцев в году?',
    variants: ['6', '12', '19'],
    current: 1,
  },
  {
    title: 'Сколько минут в 1 часе?',
    variants: ['15', '60', '40'],
    current: 1,
  },
  {
    title: 'Сколько часов в сутках?',
    variants: ['18', '22', '24'],
    current: 2,
  },
  {
    title: 'Сколько дней в неделе? ',
    variants: ['5', '7', '6'],
    current: 1,
  },
]


function Game({questions, step, setStep, correctAnswers, setCorrectAnswers}) {
  
  const question = questions[step]
  const procentage = step/questions.length * 100
  return (
    <>
      <div className="progress-bar">
        <div className="progress" style={{width: `${procentage}%`}}>
        </div>
      </div>
      <div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((item, index) => 
          <li key={index} onClick={() => {
            setStep(step + 1);
            (+index === +question.current) && setCorrectAnswers(correctAnswers + 1)
          }}>{item}</li>
          )}
        </ul>
      </div>
    </>
  )
}


function Result({correctAnswers, questions}) {
  return (
    <div className='result'>
    <img style={{width: '150px'}} src="https://cdn.icon-icons.com/icons2/3134/PNG/512/party_festival_holiday_celebration_fireworks_icon_192315.png" alt="" />
    <h2>Вы ответили правильно на {correctAnswers} вопросов из {questions.length}</h2>
    <a href="/">
    <button>Начать тест заново</button>
    </a>
    </div>
  )
}


function App() {
  const [step, setStep] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  return(
    <div className="App">
      {step == questions.length 
      ? <Result correctAnswers={correctAnswers} questions={questions}/> 
      : <Game questions={questions} step={step} setStep={setStep} correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers}/>
      } 
    </div>
  )
}

export default App;
