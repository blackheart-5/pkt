import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiMapPin, FiCalendar } from 'react-icons/fi'
import { experiences } from '../data/portfolioData'
import './Experience.css'

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
}
const slideIn = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <motion.div className="section-heading" variants={slideIn}>
            <h2>Experience</h2>
            <div className="divider"><span /><div className="dot" /><span /></div>
            <p>My professional journey and work history</p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, idx) => (
              <motion.div key={exp.id} className="timeline-item" variants={slideIn}>
                {/* Left marker */}
                <div className="tl-marker">
                  <div className="tl-dot" />
                  {idx < experiences.length - 1 && <div className="tl-line" />}
                </div>

                {/* Card */}
                <div className="tl-card">
                  <div className="tl-header">
                    <div>
                      <h3 className="tl-role">{exp.role}</h3>
                      <div className="tl-company">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                            {exp.company}&nbsp;<FiExternalLink size={12} />
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                      </div>
                    </div>
                    <div className="tl-meta">
                      <span><FiCalendar size={11} />&nbsp;{exp.period}</span>
                      <span><FiMapPin size={11} />&nbsp;{exp.location}</span>
                    </div>
                  </div>

                  <ul className="tl-bullets">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="tl-tags">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
