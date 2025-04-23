import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import styles from './styles.module.css'

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
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <strong>Orbite &copy; 2025</strong>
    </footer>
  )
}