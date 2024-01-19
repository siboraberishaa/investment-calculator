import { useState } from "react"

function Form(props){

  const [getInput, setGetInput] = useState({
    currentSavings: "",
    expectedReturn: "",
    duration: "",
    yearlyContribution: ""
  })

  function handleInputChange(event){
    const {name,value} = event.target 
    setGetInput(prevGetInput => {
      return {...prevGetInput, [name]: value}
    })    
  }

  function handleResetBtn(){
    setGetInput(prevGetInput => {
      return {...prevGetInput, currentSavings: "", expectedReturn: "", duration: "", yearlyContribution: ""}
    } )
    props.calculateHandler("")
  }

  function handleSubmit(event){
    event.preventDefault()
    props.calculateHandler(getInput)
  }

    return(
        <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings (€)</label>
            <input type="number" name="currentSavings" value={getInput.currentSavings} 
            onChange={handleInputChange} id="current-savings" 
             />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
            <input type="number" name="yearlyContribution" value={getInput.yearlyContribution} 
            onChange={handleInputChange} id="yearly-contribution" 
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" name="expectedReturn" value={getInput.expectedReturn} 
            onChange={handleInputChange} id="expected-return" 
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" name="duration" value={getInput.duration} 
            onChange={handleInputChange} id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={handleResetBtn} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    )
}

export default Form