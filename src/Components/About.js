import React, { Component } from "react";
import { StyledAbout } from "../styles/About.styled";
import AboutLogo from "../Images/about.logo.png";

export class About extends Component {
  render() {
    return (
      <StyledAbout>
        <img src={AboutLogo} alt="Profile" width="100%" />
        <div className="spacer"></div>
        <div className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eveniet
          consequatur rerum maiores at aspernatur ut minima dolor delectus quam.
          Delectus debitis voluptates tempore praesentium architecto harum eos
          odio voluptatem.
        </div>
        <div className="input-form">
          <p>
            <a href="mailto:no-reply@jobworksinc.org?subject=Information on WebWorks&body=I am interested in getting more information about WebWorks!">
              Contact Us!{" "}
            </a>
          </p>
        </div>
      </StyledAbout>
    );
  }
}

export default About;
