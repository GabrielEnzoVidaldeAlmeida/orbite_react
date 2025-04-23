import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

import '../../styles/global.css'

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate ({children}: MainTemplateProps) {
  return (
    <div className="layout">
      <Nav />

      {/* MENU */}
      
      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}