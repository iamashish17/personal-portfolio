import React from "react"
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile-pic.jpg"

const About = () => {
  return (
    <div
      id="about"
      className="about"
    >
      <div className="about-title">
        <h1>About me</h1>
        <img
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt=""
            className="about_img"
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate and motivated CSIT student with a strong
              foundation in computer science. I have excellent problem-solving
              skills and a keen interest in technology and software development.
            </p>
            <p>
              My academic projects have allowed me to hone my coding abilities,
              teamwork, and project management skills. I'm always eager to learn
              and contribute in any role that challenges me and helps me grow.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
