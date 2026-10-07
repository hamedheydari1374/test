import TopBar from './components/TopBar.jsx'
import ContactBar from './components/ContactBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Departments from './components/Departments.jsx'
import About from './components/About.jsx'
import Courses from './components/Courses.jsx'
import VideoShowcase from './components/VideoShowcase.jsx'
import ModalityInfo from './components/ModalityInfo.jsx'
import BenefitsCompare from './components/BenefitsCompare.jsx'
import CareerCTA from './components/CareerCTA.jsx'
import Faq from './components/Faq.jsx'
import Outcomes from './components/Outcomes.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import ClassCalendar from './components/ClassCalendar.jsx'
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
        <VideoShowcase />
        <ModalityInfo />
        <BenefitsCompare />
        <CareerCTA />
        <Faq />
        <Outcomes />
        <Testimonials />
        <Blog />
        <ClassCalendar />
      </main>
      <Footer />
    </div>
  )
}
