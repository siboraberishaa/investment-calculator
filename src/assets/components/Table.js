import { nanoid } from "nanoid"


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})


function Table(props){

  const newdata = props.tableData.map((data)=>{
    return <tr key={nanoid()}>
            <td>{data.year}</td>
            <td>{formatter.format(data.savingsEndOfYear)}</td>
            <td>{formatter.format(data.yearlyInterest)}</td>
            <td>{formatter.format(data.savingsEndOfYear - props.savings - data.yearlyContribution * data.year)}</td>
            <td>{formatter.format(data.yearlyContribution + data.yearlyContribution * data.year)}</td>
          </tr>
  })


    return(
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {newdata}
        </tbody>
      </table>
    )
}

export default Table