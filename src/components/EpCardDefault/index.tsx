import styles from './styles.module.css'

import imgchat from '../../assets/images/img-podcasts/img-eps/img_do_chat.png'
import { EllipsisVertical, PlayIcon } from 'lucide-react'

export function EpCardDefault () {
  return (
    <div className={styles.containerCard}>
      <div className={styles.imgCard}>
        <img src={imgchat} alt="" />
      </div>

      <div className={styles.textCard}>
        <div>
          <h3>Mentes Brilhantes</h3>
          <p><a href='#'>Orbite</a> - Orbite Team</p>
        </div>

      <div className={styles.infoCard}>
        <label>1h38m</label>
          <div className={styles.btnCard}>
            <button className={styles.btnPlay}><PlayIcon /></button>
            <button className={styles.btnOptions}><EllipsisVertical /></button>
          </div>
        </div>
      </div>
    </div>
  )
}