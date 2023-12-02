import { Routes, Route, useResolvedPath} from "react-router-dom"
import {Home,Portfolio,ProjectInfo,Contact} from "./views"
import {Navbar,ContactMe,Footer} from "./components"
import {AppProvider} from "./context/AppContext";
import './App.css'

function App() {
  const path = useResolvedPath()

  return (
    <AppProvider>
    <div className="app">
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/projectinfo" element={<ProjectInfo/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        {path.pathname != "/contact" && 
      <ContactMe/>
  }
      <Footer/>
    </div>
    </AppProvider>
  )
}

export default App
