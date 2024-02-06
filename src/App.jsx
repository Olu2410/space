
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Navbar from './Components/Navbar'

function App() {
  
  return (
    <div className="flex flex-col">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/technology"  element={<Technology/>}/>
    </Routes>
  </div>
)
}

export default App
