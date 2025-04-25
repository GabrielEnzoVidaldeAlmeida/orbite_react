import { MenuIcon } from "lucide-react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

import styles from './styles.module.css'

import '../../styles/global.css'
import { useState } from "react";
import { MenuLateral } from "../../components/MenuLateral";
import { MainContainer } from "../../components/Layout/MainContainer";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate ({children}: MainTemplateProps) {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu (prevMenu => !prevMenu)
  }

  function closeMenu() {
    setMenu(false)
  }

  return (
    <div className={`${styles.layout} layout`}>
      <Nav />

      <div className={styles.pageContent}>
        {menu && <MenuLateral onClose={closeMenu} />}

        <main className={styles.mainContent}>
        <div
          className={styles.menuBtn}
          style={{ visibility: menu ? 'hidden' : 'visible' }}
        >
          <button onClick={handleMenu}><MenuIcon /></button>
        </div>
        <MainContainer >
          {children}
        </MainContainer>
        </main>
      </div>

      <Footer />
    </div>
  )
}