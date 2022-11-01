import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';
import { useState } from 'react';

function ExpenseItem(props) {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__description">
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
