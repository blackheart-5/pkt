import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import './Hero.css'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const [display,    setDisplay]    = useState('')
  const [roleIdx,    setRoleIdx]    = useState(0)
  const [deleting,   setDeleting]   = useState(false)

  // Typing animation
  useEffect(() => {
    const roles   = personalInfo.roles
    const current = roles[roleIdx]
    let timer

    if (!deleting) {
      if (display.length < current.length) {
        timer = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 85)
      } else {
        timer = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), 45)
      } else {
        setDeleting(false)
        setRoleIdx(p => (p + 1) % roles.length)
      }
    }
    return () => clearTimeout(timer)
  }, [display, deleting, roleIdx])

  const socials = [
    { icon: FiGithub,   href: personalInfo.github,                 label: 'GitHub'   },
    { icon: FiLinkedin, href: personalInfo.linkedin,               label: 'LinkedIn' },
    { icon: FiTwitter,  href: personalInfo.twitter,                label: 'Twitter'  },
    { icon: FiMail,     href: `mailto:${personalInfo.email}`,      label: 'Email'    },
  ].filter(s => s.href && s.href !== 'mailto:')

  return (
    <section id="hero" className="hero">
      <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">

        {/* Available badge */}
        <motion.div className="hero-badge" variants={item}>
          <span className="badge-dot" />
          {personalInfo.availableForWork ? 'Available for opportunities' : 'Not currently available'}
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero-name" variants={item}>
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div className="hero-role" variants={item}>
          <span className="role-prefix">I'm a&nbsp;</span>
          <span className="role-typed">{display}</span>
          <span className="cursor" />
        </motion.div>

        {/* Bio */}
        <motion.p className="hero-bio" variants={item}>
          {personalInfo.bio}
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="hero-actions" variants={item}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div className="hero-socials" variants={item}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <FiArrowDown size={20} />
        </motion.span>
        <span>Scroll to explore</span>
      </motion.button>
    </section>
  )
}
