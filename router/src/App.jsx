import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./Comp/Navbar"
import Route from "./Comp/Route"

function App() {


  return (
    <Router>
      <Navbar />
      <Route />
    </Router>
  )
}

export default App