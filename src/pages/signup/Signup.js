import React from 'react'
import { useState } from 'react'

//styles
import styles from './Signup.module.css'

export default function Signup() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(displayName, email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>Name:</span>
        <input
        type="text"
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName}
        />
      </label>
      <label>
        <span>E-mail:</span>
        <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
      </label>
      <button className="btn">Signup!</button>
    </form>
  )
}
