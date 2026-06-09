import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail } from 'react-icons/fi'
import { personalInfo, skills } from '../data/portfolioData'
import './About.css'

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const ref       = useRef(null)
  const isInView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <motion.div className="section-heading" variants={fadeUp}>
            <h2>About Me</h2>
            <div className="divider"><span /><div className="dot" /><span /></div>
            <p>A little bit about who I am and what drives me</p>
          </motion.div>

          <div className="about-grid">
            {/* Bio card */}
            <motion.div className="about-bio-card" variants={fadeUp}>
              <p className="bio-text">{personalInfo.bio}</p>

              <div className="bio-details">
                {personalInfo.location && (
                  <div className="bio-detail">
                    <FiMapPin className="detail-icon" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.email && (
                  <div className="bio-detail">
                    <FiMail className="detail-icon" />
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div className="skills-col" variants={fadeUp}>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-group">
                  <h4 className="skill-group-label">{category}</h4>
                  <div className="skill-tags">
                    {items.map(skill => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
