import React from "react"

export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">AqsaSaeed</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
