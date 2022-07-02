import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';


function Expenses(props){

  const [filteredYear,setFilteredYear] = useState('2020')

  const selectedYear = (year) =>{
   //console.log("year "+ year)
    setFilteredYear(year)
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()  === filteredYear;

    });  

    let expensesContext = <p>No expenses found.</p>

    if(filteredExpenses.length > 0){
      expensesContext = filteredExpenses.map((expense) => (
        <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />
      ))
    };
  

    return(
    
    <Card className="expenses">
      <ExpensesFilter default= {filteredYear} onYear = {selectedYear}></ExpensesFilter>

      {expensesContext}
    {/* 
      {filteredExpenses.map((expense) => (
        <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date} />
      ))}

    
     <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
     */}
    </Card>
   
    );
}

export default Expenses;