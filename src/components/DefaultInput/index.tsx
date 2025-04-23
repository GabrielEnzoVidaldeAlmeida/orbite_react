import { useState } from 'react';
import styles from './styles.module.css'
import { Eye, EyeOff } from 'lucide-react';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput ({ id, labelText, type, ...rest }: DefaultInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className={styles.inputWrapper}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <div className={styles.inputContainer}>
        <input className={styles.input} id={id} type={inputType} {...rest} />

        {isPassword && (
          <button type="button" className={styles.toggleBtn} onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  )
}