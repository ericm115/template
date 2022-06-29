import styled from "styled-components";

export const StyledSlider = styled.div`
  padding-top: 2em;
  overflow: hidden;
  height: 510px;
  width: 1000px;
  margin: 0 auto;

  /* Style each of the sides
with a fixed width and height */
  .slide {
    float: left;
    height: 510px;
    width: 1000px;
  }

  /* Add animation to the slides */
  .slide-wrapper {
    /* Calculate the total width on the
  basis of number of slides */
    width: calc(1000px * 4);

    /* Specify the animation with the
  duration and speed */
    animation: slide 40s ease infinite;
  }

  /* Set the background color
of each of the slides */
  .slide:nth-child(1) {
    background: green;
  }

  .slide:nth-child(2) {
    background: pink;
  }

  .slide:nth-child(3) {
    background: red;
  }

  .slide:nth-child(4) {
    background: yellow;
  }

  /* Define the animation
for the slideshow */
  @keyframes slide {
    /* Calculate the margin-left for
  each of the slides */
    20% {
      margin-left: 0px;
    }

    40% {
      margin-left: calc(-1000px * 1);
    }

    60% {
      margin-left: calc(-1000px * 2);
    }

    80% {
      margin-left: calc(-1000px * 3);
    }
  }
`;
