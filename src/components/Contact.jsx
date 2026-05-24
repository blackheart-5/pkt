import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import './Contact.css'

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const allSocials = [
  { icon: FiGithub,   href: personalInfo.github,           label: 'GitHub'   },
  { icon: FiLinkedin, href: personalInfo.linkedin,         label: 'LinkedIn' },
  { icon: FiTwitter,  href: personalInfo.twitter,          label: 'Twitter'  },
  { icon: FiMail,     href: `mailto:${personalInfo.email}`, label: 'Email'   },
]
const socials = allSocials.filter(s => s.href && s.href !== 'mailto:' && s.href !== 'mailto:undefined')

export default function Contact() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-inner"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="section-heading" variants={fadeUp}>
            <h2>Get In Touch</h2>
            <div className="divider"><span /><div className="dot" /><span /></div>
            <p>Have a question, project idea, or just want to say hi? I'd love to hear from you.</p>
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            {/* Top gradient accent line */}
            <div className="contact-card-top-bar" />

            <div className="contact-body">
              <div className="contact-message">
                <h3>Let's work together</h3>
                <p>
                  I'm currently open to new opportunities. Whether you have a question,
                  a project idea, or just want to connect — my inbox is always open!
                </p>
                <a href={`mailto:${personalInfo.email}`} className="email-btn">
                  <FiSend size={16} />
                  {personalInfo.email}
                </a>
              </div>

              <div className="contact-sep" />

              <div className="contact-socials">
                <p className="socials-label">Find me on</p>
                <div className="socials-row">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="social-btn"
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
