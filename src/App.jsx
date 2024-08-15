
import './App.css'
import Allpages from './Components/Allpages/Allpages'
import Desktop from './Components/Desktop/Desktop'
import Display from './Components/Display'
import Home from './Components/Home/Home'
import ThreeButtons from './Components/ThreeButtons/ThreeButtons'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
 

  return (
    <>
         <Router>
      {/* Navigation */}
      

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/allpages" element={<Allpages />} />
        <Route path="/ThreeButtons" element={<ThreeButtons /> } />
        <Route path="/Desktop" element={<Desktop />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
    </>
  )
}

export default App
