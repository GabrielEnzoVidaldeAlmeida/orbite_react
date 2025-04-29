import styles from './styles.module.css'

type CardCategoryHighProps = {
  text: string, 
  img: string,
}

export function CardCategoryHigh ({ text, img }: CardCategoryHighProps) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.imgCard}>
        <img src={img} />
        <strong>{text}</strong>
      </div>
    </div>
  )
}