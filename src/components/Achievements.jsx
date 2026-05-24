import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiStar, FiBookOpen, FiCode, FiTarget, FiTrendingUp, FiZap } from 'react-icons/fi'
import { achievements } from '../data/portfolioData'
import './Achievements.css'

const iconMap = {
  trophy:      FiAward,
  star:        FiStar,
  certificate: FiBookOpen,
  code:        FiCode,
  medal:       FiTarget,
  award:       FiAward,
  rocket:      FiTrendingUp,
  zap:         FiZap,
}

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const pop = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Achievements() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <motion.div className="section-heading" variants={pop}>
            <h2>Achievements</h2>
            <div className="divider"><span /><div className="dot" /><span /></div>
            <p>Milestones and recognitions along the way</p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map(item => {
              const Icon = iconMap[item.icon] || FiAward
              return (
                <motion.div
                  key={item.id}
                  className="ach-card"
                  variants={pop}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="ach-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <div className="ach-body">
                    <span className="ach-date">{item.date}</span>
                    <h3 className="ach-title">{item.title}</h3>
                    <p className="ach-desc">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
