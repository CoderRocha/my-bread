import React from 'react'

// styles
import Styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  return (
    <ul className={Styles.transactions}>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                <p className={Styles.name}>{transaction.name}</p>
                <p className={Styles.amount}>${transaction.amount}</p>
            </li>
        ))}
    </ul>
  )
}
