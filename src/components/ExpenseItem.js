import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <dive>March 28th 2022</dive>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
      </div>
      <div className="expense-item__price">$294.65</div>
    </div>
  )
}
export default ExpenseItem
