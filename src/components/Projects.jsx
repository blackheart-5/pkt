import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import './Projects.css'

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function ProjectMedia({ project }) {
  if (project.video) {
    return (
      <video
        src={project.video}
        className="media-asset"
        controls
        preload="metadata"
        aria-label={`${project.title} demo video`}
      />
    )
  }
  if (project.image) {
    return <img src={project.image} alt={project.title} className="media-asset" />
  }
  return (
    <div className="media-placeholder">
      <FiImage size={30} />
      <span>Add image / video in portfolioData.js</span>
    </div>
  )
}

export default function Projects() {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'featured' ? projects.filter(p => p.featured) : projects

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <motion.div className="section-heading" variants={card}>
            <h2>Projects</h2>
            <div className="divider"><span /><div className="dot" /><span /></div>
            <p>Things I've built that I'm proud of</p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div className="filter-bar" variants={card}>
            {['all', 'featured'].map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map(project => (
                <motion.article
                  key={project.id}
                  className="project-card"
                  variants={card}
                  layout
                  exit={{ opacity: 0, scale: 0.92 }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                >
                  {/* Media */}
                  <div className="card-media">
                    <ProjectMedia project={project} />
                    {project.featured && <span className="featured-chip">Featured</span>}
                  </div>

                  {/* Body */}
                  <div className="card-body">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.description}</p>
                    <div className="card-tags">
                      {project.technologies.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Footer links */}
                  <div className="card-footer">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                        aria-label="View on GitHub"
                      >
                        <FiGithub size={15} /> GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link accent"
                        aria-label="Live demo"
                      >
                        <FiExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
