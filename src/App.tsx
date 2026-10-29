import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ConsentProvider } from './context/ConsentProvider'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Creators from './pages/Creators'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Join from './pages/Join'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <ConsentProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/creators" element={<Creators />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<Join />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConsentProvider>
    </HelmetProvider>
  )
}
