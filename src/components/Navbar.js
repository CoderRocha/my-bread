import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

//styles
import styles from './Navbar.module.css'
import myBreadIcon from '../assets/my-bread-icon.png'

export default function Navbar() {
  const { logout } = useLogout()

  return (
    <nav className={styles.navbar}>
      <ul>
        <img
        src={myBreadIcon}
        />
        <li className={styles.title}>myBread</li>

        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/signup"}>Sign up</Link></li>

        <li>
          <button className="btn" onClick={logout}>Log out</button>
        </li>
      </ul>
    </nav>
  )
}
