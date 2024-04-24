import { BrowserRouter as Router} from "react-router-dom";
import NavBar from './components/NavBar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Tournament from './pages/Tournament'
import Contact from "./pages/Contact";

function App() {

  return (
    <Router>

      <NavBar />
      <Home />
      <Tournament />
      <Contact/>
      <Footer />
      
    </Router>
  )
}

export default App
