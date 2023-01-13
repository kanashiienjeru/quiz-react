import React, {useState} from 'react'
import './styles.css'

const questions = [
  {
    title: 'Как меня зовут?',
    variants: ['Артём', 'Денис', 'Максим'],
    current: 0,
  },
  {
    title: 'Сколько мне лет?',
    variants: ['17', '18', '19'],
    current: 1,
  },
  {
    title: 'Какой у меня ранг в osu?',
    variants: ['16k', '12k', '13k'],
    current: 1,
  },
  {
    title: 'Какой у меня ранг в Valorant?',
    variants: ['Gold 1', 'Silver 3', 'Silver 1'],
    current: 2,
  },
  {
    title: 'Я - ',
    variants: ['хороший', 'классный', 'няшный'],
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
