export default function Timeline() {
    const timelineEvents = [
      {
        year: '2023',
        title: 'XX Developer',
        company: 'Tech Company',
        description: 'Led development of major projects and mentored junior developers.'
      },
      {
        year: '2021',
        title: 'XX Developer',
        company: 'Startup Inc.',
        description: 'Developed and maintained multiple web applications using modern technologies.'
      },
      {
        year: '2019',
        title: 'XX Developer',
        company: 'Digital Agency',
        description: 'Created responsive and interactive web experiences for various clients.'
      }
    ]
  
    return (
      <section className="timeline-section">
        <h2>My Journey</h2>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-event">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="year">{event.year}</span>
                <h3>{event.title}</h3>
                <h4>{event.company}</h4>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  