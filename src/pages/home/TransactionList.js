import React from 'react'
import { useFirestore } from '../../hooks/useFirestore'

// styles
import Styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore('transactions')
  console.log(response)

  return (
    <ul className={Styles.transactions}>
        {transactions.map((transaction) => (
            <li key={transaction.id}>
                <p className={Styles.name}>{transaction.name}</p>
                <p className={Styles.amount}>${transaction.amount}</p>
                <button onClick={() => deleteDocument(transaction.id) } className={Styles.button}>X</button>
            </li>
        ))}
    </ul>
  )
}
