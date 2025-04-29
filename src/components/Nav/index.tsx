import styles from './styles.module.css'
import logo from '../../assets/images/logo/logo.png'
import { RouterLink } from '../RouterLink'



export function Nav () {



  return (
    <nav className={styles.navBar}>
      <div className={styles.containerNav}>
        <div className={styles.logoNav}>
          <RouterLink href='/'><img src={logo} alt='logo' /></RouterLink>
        </div>

        <div className={styles.infoNav}>
          <RouterLink href='/categories/'><strong>Categorias </strong></RouterLink>
          <input placeholder='O que você procura?'/>
          <a href='#'>Login</a>
          <a href='#' className={styles.linkRegisterNav}>Cadastrar-se</a>
        </div>
      </div>
      
    </nav>
  )
}