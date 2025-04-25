import styles from './styles.module.css'

type CardThemeProps = {
  // svg?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  svgIcon?: React.ReactNode;
  textImg?: string;
  text: string;
}


export function CardTheme ({ svgIcon, textImg, text }: CardThemeProps) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.svgWrapper}>
        {svgIcon && svgIcon}
        {textImg && <img src={textImg} alt={text} />}
      </div>
      <div className={styles.textWrapper}>
        <p>{text}</p>
      </div>
    </div>
  )
}
