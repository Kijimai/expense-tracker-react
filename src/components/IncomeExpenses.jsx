import React from 'react'

function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" class="money-plus">+0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-deduct" className="money-deduct">-0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
