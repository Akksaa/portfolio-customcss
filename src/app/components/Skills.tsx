import React from 'react'

export default function Skills() {
    const skills = [
      { name: "Frontend", items: ["Next.js", "HTML/CSS", "JavaScript"] },
      { name: "Backend", items: ["Node.js", "Typescript"] },
      { name: "Tools", items: ["Github", "Figma", "Vercel"] }
    ]
  
    return (
      <section className="skills" id="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.name}</h3>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
