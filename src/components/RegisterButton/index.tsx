import styles from './styles.module.css'

type ButtonDefaultProps = {
  icon?: React.ReactNode;
  text?: React.ReactNode;
  width?: string;
  height?: string;
} & React.ComponentProps<'button'>

export function RegisterButton ({icon, text, width, height, ...props}: ButtonDefaultProps) {
  return  (
    <>
      <button className={styles.btnDefault} style={{ width, height }} {...props}>
        {icon} {text}
      </button>
    </>
  )
  
}