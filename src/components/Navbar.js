import React from 'react'
import { Link } from 'react-router-dom'

//styles
import styles from './Navbar.module.css'
import myBreadIcon from '../assets/my-bread-icon.png'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <img
        src={myBreadIcon}
        />
        <li className={styles.title}>myBread</li>

        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/signup"}>Signup</Link></li>
      </ul>
    </nav>
  )
}
