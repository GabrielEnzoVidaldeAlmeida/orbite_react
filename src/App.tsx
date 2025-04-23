// import { Login } from '../src/components/pages/Login'
import { Index } from './components/pages/Index'
import './styles/global.css'
import './styles/theme.css'
import { MainTemplate } from './templates/MainTemplate'


function App() {
  return (
    <>
      {/* <Login /> */}
      <MainTemplate>
        <Index />
      </MainTemplate>
    </>
  )
}

export default App
