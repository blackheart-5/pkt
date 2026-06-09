import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiCalendar, FiGitPullRequest } from 'react-icons/fi'
import { openSourceContributions } from '../data/portfolioData'
import './OpenSource.css'

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function OpenSource() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="open-source" className="open-source section">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <motion.div className="section-heading" variants={fadeUp}>
            <h2>Open Source</h2>
            <div className="divider"><span /><div className="dot" /><span /></div>
            <p>Contributing to the community, one pull request at a time</p>
          </motion.div>

          <div className="oss-list">
            {openSourceContributions.map(contrib => (
              <motion.div key={contrib.id} className="oss-card" variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>

                <div className="oss-card-header">
                  <div className="oss-title-row">
                    <FiGitPullRequest size={18} className="oss-pr-icon" />
                    <h3 className="oss-project">{contrib.project}</h3>
                    <span className="oss-type-chip">{contrib.type}</span>
                  </div>
                  <div className="oss-meta">
                    <span><FiCalendar size={11} />&nbsp;{contrib.period}</span>
                    {contrib.repo && (
                      <a href={contrib.repo} target="_blank" rel="noopener noreferrer" className="oss-repo-link">
                        <FiGithub size={13} />&nbsp;View Repo
                      </a>
                    )}
                  </div>
                </div>

                <ul className="oss-bullets">
                  {contrib.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="oss-tags">
                  {contrib.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
