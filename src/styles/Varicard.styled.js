import styled from "styled-components";

export const StyledVaricard = styled.div`
  display: flex;
  flex-direction: column;

  .card {
    border-radius: 1em;
    background-color: rgba(141, 107, 107, 0.1);
    display: flex;
    flex-direction: row;
    padding: 1em;
    margin: 1em;
  }
  .card div {
    flex-basis: 40%;
  }
  .card img {
    border-radius: 3em 1em 3em 1em;
    flex-basis: 50%;
    margin: 0 0 0 auto;
  }
  .card:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
    img {
      border-radius: 1em 3em 1em 3em;
      margin: 0 auto 0 0;
    }
  }
`;
