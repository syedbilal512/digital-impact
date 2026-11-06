import Navbar from "./components/navbar/navbar"
import About from "./pages/about"
import Home from "./pages/home"
import Services from "./pages/services"
import Portfolio from "./pages/portfolio"

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Portfolio/>
    </>
  )
}

export default App
