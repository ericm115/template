import React from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledVaricard } from "../styles/Varicard.styled";

export default function Varicard({ data }) {
  return (
    <StyledVaricard>
      {data.map((item) => (
        <div className="card" key={uuidv4()}>
          <div>{item.title}</div>
          <img src={item.img} width="100%" alt="" />
        </div>
      ))}
    </StyledVaricard>
  );
}
