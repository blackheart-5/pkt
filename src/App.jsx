import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import About             from './components/About'
import Experience        from './components/Experience'
import Projects          from './components/Projects'
import Stats             from './components/Stats'
import OpenSource        from './components/OpenSource'
import Achievements      from './components/Achievements'
import Contact           from './components/Contact'
import { BeamsBackground } from './components/ui/beams-background'
import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Fixed canvas beam animation — visible behind all sections */}
      <BeamsBackground />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Achievements />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Designed &amp; Built with React &amp; Framer Motion</p>
        </div>
      </footer>
    </div>
  )
}
