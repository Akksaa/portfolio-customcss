import React from 'react'
import Image from 'next/image'
import Timeline from '@/app/components/Timeline'
import AboutStats from '@/app/components/AboutStats'

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <div className="about-image-container">
            <Image
              src="/profile.png"
              alt="Your Name"
              width={300}
              height={300}
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h1>About Me</h1>
            <p className="about-bio">
              
              Hi, I&apos;m Aqsa Saeed, a passionate front-end developer based in Karachi. 
              With over [X] years of experience in web development, I specialize in creating 
              user-centric applications that combine beautiful design with efficient functionality.
            </p>
            <div className="personal-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span>City, Country</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience</span>
                <span>X Years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Available for</span>
                <span>Freelance & Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AboutStats />
      <Timeline />
    </main>
  )
}
