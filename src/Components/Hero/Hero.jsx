import React from "react"
import "./Hero.css"
import profile_img from "../../assets/profile-pic.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import cvFile from "../../assets/Ashish_resume.pdf"

const Hero = () => {
  return (
    <div
      id="home"
      className="hero"
    >
      <img
        src={profile_img}
        alt=""
        className="profile_img"
      />
      <h1>
        <span>I'm Ashish Acharya,<br /></span> Bsc.CSIT Student.
      </h1>
      <p></p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
