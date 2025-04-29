import styles from './styles.module.css'
import logo from '../../assets/images/logo/logo.png'
import { ChevronDown } from 'lucide-react'
import { RouterLink } from '../RouterLink'



export function Nav () {
  return (
    <nav className={styles.navBar}>
      <div className={styles.containerNav}>
        <div className={styles.logoNav}>
          <RouterLink href='/'><img src={logo} alt='logo' /></RouterLink>
        </div>

        <div className={styles.infoNav}>
          <strong>Categorias <ChevronDown /></strong>
          <input placeholder='O que você procura?'/>
          <a href='#'>Login</a>
          <a href='#' className={styles.linkRegisterNav}>Cadastrar-se</a>
        </div>
      </div>
    </nav>
  )
}