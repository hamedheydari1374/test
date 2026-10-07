import { useRoute } from './router.jsx'
import TopBar from './components/TopBar.jsx'
import ContactBar from './components/ContactBar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CoursePage from './pages/CoursePage.jsx'

export default function App() {
  const path = useRoute()
  const courseMatch = path.match(/^\/course\/([^/]+)\/?$/)

  return (
    <div className="min-h-screen font-sans">
      <TopBar />
      <ContactBar />
      <Navbar />
      <main>{courseMatch ? <CoursePage slug={decodeURIComponent(courseMatch[1])} /> : <Home />}</main>
      <Footer />
    </div>
  )
}
