import { useEffect } from "react"
import styles from './styles.module.css'

import logo from '../../../assets/images/logo/logo.png'
import { DefaultInput } from "../../DefaultInput"
import { ButtonDefault } from "../../ButtonDefault"

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
        <form>
          <h1>Login</h1>
          {/* <strong>E-mail:</strong> */}
          <DefaultInput labelText="Username:" id="text" type="text" />
          {/* <strong>Senha:</strong> */}
          <DefaultInput labelText="Password:" id="password" type="password" />

          <ButtonDefault text="Entrar"/>
        </form>
          <strong>Não tem uma conta? &nbsp;<a href="#">Criar conta</a></strong>
      </div>
    </div>
  )
}