import styles from './style.module.css'

import spaceTodayEpTeste from '../../assets/images/img-podcasts/img-cover/spacetoday.jpg'
import { EllipsisVertical, PlayCircle } from 'lucide-react'


export default function CardEpMini () {
  return (
<div className={styles.containerCard}>
  <div className={styles.leftSide}>
    <img src={spaceTodayEpTeste} />
    <div>
      <h4>SpaceToday</h4>
      <label>10.000 curtidas</label>
    </div>
  </div>

  <div className={styles.cardBtn}>
    <button className={styles.iconButton}>
      <PlayCircle />
    </button>

    <button className={styles.iconButton}>
    <EllipsisVertical />
    </button>
  </div>
</div>

  )
}