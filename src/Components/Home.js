import React from "react";
import { StyledHome } from "../styles/Home.styled";
import Varicard from "./Varicard";

let varicard_data = [
  {
    title: "Some title",
    img: "https://source.unsplash.com/random/?code",
  },
  {
    title: "Some Other title",
    img: "https://source.unsplash.com/random/?code",
  },
  {
    title: "Some Other title again",
    img: "https://source.unsplash.com/random/?code",
  },
];

export default function Home() {
  return (
    <>
      <StyledHome>
        <h1>Welcome</h1>
        <div className="spacer"></div>
        <div className="content">
          WebWorks is a 12-week Frontend Web Development training program that
          equips students with emerging and market-driven technical skills,
          industry certifications, web development portfolio, soft skills, and
          employer connections to land a higher-paying job as a Web Developer.
          This training intiative- like other related programs iřom Job Works-
          helps prepare and connect students from diverse, non-technical
          backgrounds to the growth and prosperity of a technology career. All
          training 15 delivered via our custom-built vrtual platform and within
          a live instructor led virtual classroom that engages our learners.
        </div>
      </StyledHome>
      <Varicard data={varicard_data} />
    </>
  );
}
