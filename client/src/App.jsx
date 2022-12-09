import './app.css'
import Login from './components/Login'
import Lineup from './components/Lineup'
const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return (
    code ? <Lineup code={code}/> : <Login />
  )
}

export default App
