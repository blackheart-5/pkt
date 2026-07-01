import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { WordRotate } from './ui/word-rotate'
import { BlurFade } from './ui/blur-fade'
import './Hero.css'

export default function Hero() {
  const socials = [
    { icon: FiGithub,   href: personalInfo.github,            label: 'GitHub'   },
    { icon: FiLinkedin, href: personalInfo.linkedin,          label: 'LinkedIn' },
    { icon: FiMail,     href: `mailto:${personalInfo.email}`, label: 'Email'    },
  ].filter(s => s.href && s.href !== 'mailto:')

  return (
      <section id="hero" className="hero">
        <div className="hero-content">

          {/* Name */}
          <BlurFade delay={0.2} inView>
            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
          </BlurFade>

          {/* Role — WordRotate from Magic UI */}
          <BlurFade delay={0.3} inView>
            <div className="hero-role">
              <span className="role-prefix">I'm a&nbsp;</span>
              <WordRotate
                words={personalInfo.roles}
                duration={2500}
                className="role-typed"
                motionProps={{
                  initial:    { opacity: 0, y: -16 },
                  animate:    { opacity: 1, y: 0   },
                  exit:       { opacity: 0, y: 16  },
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              />
            </div>
          </BlurFade>

          {/* Bio */}
          <BlurFade delay={0.4} inView>
            <p className="hero-bio">{personalInfo.bio}</p>
          </BlurFade>

          {/* CTA buttons */}
          <BlurFade delay={0.5} inView>
            <div className="hero-actions">
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
            </div>
          </BlurFade>

          {/* Social links */}
          <BlurFade delay={0.6} inView>
            <div className="hero-socials">
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
            </div>
          </BlurFade>
        </div>

        {/* Scroll indicator */}
        <motion.button
          className="scroll-down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
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
