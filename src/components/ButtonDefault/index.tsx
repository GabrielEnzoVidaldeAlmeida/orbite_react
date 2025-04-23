import styles from './styles.module.css'

type ButtonDefaultProps = {
  icon?: React.ReactNode;
  text?: string;
  width?: string;
  height?: string;
} & React.ComponentProps<'button'>

export function ButtonDefault ({icon, text, width, height, ...props}: ButtonDefaultProps) {
  return  (
    <>
      <button className={styles.btnDefault} style={{ width, height }} {...props}>
        {icon} {text}
      </button>
    </>
  )
  
}