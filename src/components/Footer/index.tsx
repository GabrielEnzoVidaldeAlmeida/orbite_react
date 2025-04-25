import styles from './styles.module.css'
import { X } from '../../assets/svgs/icon-svg/X'
import { Facebook } from '../../assets/svgs/icon-svg/Facebook'
import { Instagram } from '../../assets/svgs/icon-svg/Instagram'

export function Footer () {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.containerLinks}>
        {/* INSTITUCIONAL */}
        <div className={styles.linksFooter}>
          <label>Institucional</label>
          <a href='#'>Sobre nós</a>
          <a href='#'>Seu podcast na Orbite</a>
          <a href='#'>Aplicativo móvel (em desenvolvimento)</a>
        </div>

        {/* AJUDA */}
        <div className={styles.linksFooter}>
          <label>Ajuda</label>
          <a href='#'>Suporte</a>
        </div>

        {/* REDES SOCIAIS */}
        <div className={`${styles.linksFooter} ${styles.socialMedia}`}>
          <label>Redes Sociais</label>
          <div className={styles.socialMediaIcons}>
            <Instagram />
            <Facebook />
            <X />
            
          </div>
        </div>
      </div>
      <strong>Orbite &copy; 2025</strong>
    </footer>
  )
}