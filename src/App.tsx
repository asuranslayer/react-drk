
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Aboutus from './nikhil/Aboutus'
import ContactUs from './nikhil/ContactUs'

import Movies from './nikhil/Movies'
import MyHome from './nikhil/MyHome'



export default function App() {
  return (

    <div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
