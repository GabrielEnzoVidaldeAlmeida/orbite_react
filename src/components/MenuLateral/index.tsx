import { CornerDownLeft, MoonIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { RegisterButton } from '../RegisterButton'
import { RouterLink } from '../RouterLink'

type AvailableThemes = 'dark' | 'light'

type MenuLateraProps = {
  onClose: () => void
}

export function MenuLateral ({onClose}: MenuLateraProps) {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'light';

    return storageTheme;
  });

  function handleThemeChange() {
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light'
      return nextTheme
    });
  }

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <div className={styles.menuLateralContainer}>
      <div className={styles.menuLateralBtn}>
        <button className={styles.themeBtn} onClick={handleThemeChange}>
          {nextThemeIcon[theme]}
        </button>
        <button onClick={onClose} className={styles.closeMenuBtn}><CornerDownLeft /></button>
      </div>
      <div className={styles.contentMenuLateral}>
        <h2>Seu Universo</h2>
        <p>Faça login ou cadastre-se para ter acesso ao seu universo de Podcast:</p>
        <div className={styles.containerRegisterBtn}>
          <RouterLink href='/login/'><RegisterButton text='Entrar' /></RouterLink>
          <RegisterButton text='Cadastro'  />
          {/* <button>ola</button>
          <button>ola</button> */}

        </div>
      </div>
    </div>
  )
}