import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../../components/pages/Home";
import { Login } from "../../components/pages/Login";
import { NotFound } from "../../components/pages/NotFound";

function ScrollToTop () {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname])

  return null;
}

export function MainRouter () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login/' element={<Login />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
    <ScrollToTop />
  </BrowserRouter>
  )
}