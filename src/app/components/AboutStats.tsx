export default function AboutStats() {
    const stats = [
      { number: 'XX+', label: 'Projects Completed' },
      { number: 'XX+', label: 'Happy Clients' },
      { number: 'XX+', label: 'Years Experience' },
      { number: 'XX+', label: 'Technologies Mastered' }
    ]
  
    return (
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  