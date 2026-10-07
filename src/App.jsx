import TopBar from './components/TopBar.jsx'
import ContactBar from './components/ContactBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Departments from './components/Departments.jsx'
import About from './components/About.jsx'
import Courses from './components/Courses.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <TopBar />
      <ContactBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Departments />
        <About />
        <Courses />
      </main>
      <Footer />
    </div>
  )
}
