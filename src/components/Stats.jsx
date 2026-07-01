import { NumberTicker } from './ui/number-ticker'
import { BlurFade } from './ui/blur-fade'
import './Stats.css'

const stats = [
  { value: 3,   display: '3.75', label: 'GPA',                suffix: '+',  desc: 'MSU Honors College'      },
  { value: 400, display: null,   label: 'Project Hours',       suffix: '+',  desc: 'on personal builds'      },
  { value: 4,   display: null,   label: 'Work Experiences',    suffix: '',   desc: 'internships & roles'     },
  { value: 2,   display: null,   label: 'Open Source PRs',     suffix: '',   desc: 'merged contributions'    },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.08} inView>
              <div className="stat-item">
                <div className="stat-value-row">
                  {stat.display ? (
                    <span className="stat-number">{stat.display}</span>
                  ) : (
                    <NumberTicker
                      value={stat.value}
                      className="stat-number"
                    />
                  )}
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
