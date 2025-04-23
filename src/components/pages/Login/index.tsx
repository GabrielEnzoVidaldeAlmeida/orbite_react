import { useEffect } from "react"
import styles from './styles.module.css'

import logo from '../../../assets/images/logo/logo.png'

export function Login () {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'login')

    return () => {
      document.documentElement.setAttribute('data-theme', 'light')
    };
  }, [])

  return (
    <div className={styles.containerLogin}>
      <div className={styles.logoLogin}>
        <img src={ logo } alt="Logo" />
      </div>

      <div className={styles.formLogin}>

      </div>
    </div>
  )
}