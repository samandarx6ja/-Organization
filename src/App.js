import './App.css'
import Navbar from './component/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './component/navbar/page/About'
import Articles from './component/navbar/page/Articles'
import Contacts from './component/navbar/page/Contacts'
import Jobs from './component/navbar/page/Jobs'
import Prices from './component/navbar/page/Prices'
import Project from './component/navbar/page/Project'
import Services from './component/navbar/page/Services'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
