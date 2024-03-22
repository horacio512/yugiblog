import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Tournament from './pages/Tournament'

function App() {

  return (
    <Router>

      <NavBar />
      <Home />
      <Tournament />
      <Footer />
    </Router>
  )
}

export default App
