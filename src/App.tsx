
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './nikhil/home'
import Aboutus from './nikhil/Aboutus'
import ContactUs from './nikhil/contactUs'
import Movies from './nikhil/movies'

export default function App() {
  return (

    <div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
