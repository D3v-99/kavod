import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import PageTransition from './components/PageTransition'
import ScrollProgress from './components/ScrollProgress'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import ProgrammesPage from './pages/ProgrammesPage'
import WhoWeServePage from './pages/WhoWeServePage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollProgress />
      <Layout>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/programmes" element={<ProgrammesPage />} />
            <Route path="/who-we-serve" element={<WhoWeServePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </Layout>
    </>
  )
}
