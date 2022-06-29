import React, { Component } from "react";
import { StyledSlider } from "../styles/Slider.styled";
import image1 from "../Images/img.jpg";
import image2 from "../Images/img1.jpg";

export class Slider extends Component {
  render() {
    return (
      <StyledSlider>
        <div class="slide-wrapper">
          <div class="slide">
            <img src={image1} alt="One" width="100%" />
          </div>
          <div class="slide">
            <img src={image2} alt="Two" width="100%" />
          </div>
          <div class="slide">
            <img src={image1} alt="Three" width="100%" />
          </div>
          <div class="slide">
            <img src={image2} alt="Four" width="100%" />
          </div>
        </div>
      </StyledSlider>
    );
  }
}

export default Slider;
