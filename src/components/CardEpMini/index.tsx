import styles from './style.module.css'

import { EllipsisVertical, PlayCircle } from 'lucide-react'


type CardEpMiniProps = {
  title: string,
  img: string,
  likes: number,
}

export default function CardEpMini ({ title, img, likes }: CardEpMiniProps) {
  return (
<div className={styles.containerCard} title={title}>
  <div className={styles.leftSide}>
    <img src={img} />
    <div>
      <h4>{title}</h4>
      <label>{likes.toLocaleString()} curtidas</label>
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