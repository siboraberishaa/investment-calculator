import Header from './assets/components/Header'
import Form from './assets/components/Form'
import Table from './assets/components/Table'
import { useState } from 'react'

function App() {

  const [userInput, setUserInput] = useState(null)



  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }

  const yearlyData = []


  if(userInput){

    let currentSavings = +userInput.currentSavings
    const yearlyContribution = +userInput.yearlyContribution
    const expectedReturn = +userInput.expectedReturn / 100
    const duration = +userInput.duration

    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
  }

  return (
    <div>
      <Header />
      <Form calculateHandler={calculateHandler} />
      {!userInput ? <p className='info'>No data entered yet</p> : <Table tableData={yearlyData} savings={userInput.currentSavings} />}
    </div>
  )
}

export default App
