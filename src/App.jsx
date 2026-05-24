import AnimatedBackground from './components/AnimatedBackground'
import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import About             from './components/About'
import Experience        from './components/Experience'
import Projects          from './components/Projects'
import Achievements      from './components/Achievements'
import Contact           from './components/Contact'
import './App.css'

export default function App() {
  return (
    <div className="app">
      {/* Animated floating orbs + grid overlay — fixed behind everything */}
      <AnimatedBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
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
