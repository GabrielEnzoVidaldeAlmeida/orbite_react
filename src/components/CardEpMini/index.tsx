import styles from './style.module.css'

import { EllipsisVertical, PlayCircle } from 'lucide-react'


type CardEpMiniProps = {
  title: string,
  img: string,
}

export default function CardEpMini ({ title, img }: CardEpMiniProps) {
  return (
<div className={styles.containerCard} title={title}>
  <div className={styles.leftSide}>
    <img src={img} />
    <div>
      <h4>{title}</h4>
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