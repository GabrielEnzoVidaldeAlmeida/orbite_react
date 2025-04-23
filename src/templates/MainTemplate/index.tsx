import { Nav } from "../../components/Nav";

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate ({children}: MainTemplateProps) {
  return (
    <div>
      <Nav />

      {/* MENU */}
      

      {children}

      {/* FOOTER */}
    </div>
  )
}