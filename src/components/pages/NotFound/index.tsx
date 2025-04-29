import { RouterLink } from "../../RouterLink";

import styles from './styles.module.css'

export function NotFound () {
  return (
      <div className={styles.text404}>
        <h2>404 - Página não encontrada</h2>
        <p>Você foi longe demais... Essa parte do cosmos ainda não foi explorada.</p>
        <p>Talvez seja a hora de voltar para a <RouterLink href="/">base estelar</RouterLink>.</p>
      </div>
  )
}