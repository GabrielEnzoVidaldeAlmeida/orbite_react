import { MenuIcon } from "lucide-react";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

import styles from './styles.module.css'

import '../../styles/global.css'

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate ({children}: MainTemplateProps) {
  return (
    <div className="layout">
      <Nav />

      {/* MENU-BUTTON */}
      <div className={styles.menuBtn}>
        <button><MenuIcon /></button>
      </div>
      
      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}