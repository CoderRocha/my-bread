import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

//styles
import styles from './Navbar.module.css'
import myBreadIcon from '../assets/my-bread-icon.png'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <Link to={"/"}>
        <img
        src={myBreadIcon}
        />
        </Link>
        <li className={styles.title}>myBread</li>

        {!user && (
          <>
            <li className="links"><Link to={"/login"}>Login</Link></li>
            <li className="links"><Link to={"/signup"}>Sign up</Link></li>
          </>
        )}

        {user && (
          <>
          <li>Welcome, {user.displayName}</li>
        <li>
          <button className="btn" onClick={logout}>Log out</button>
        </li>
        </>
        )}

      </ul>
    </nav>
  )
}
