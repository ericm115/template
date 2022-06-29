import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2em;
  align-items: center;

  img {
    flex-basis: 40%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50% 20% / 10% 40%;
    padding: auto;
    width: 80%;
  }

  .spacer {
    flex-basis: 10%;
  }

  .content {
    flex-basis: 50%;
    width: 70%;
    font-size: 1.75em;
  }

  .input-form {
    padding-top: 2em;
    flex-basis: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .content {
      padding-top: 2em;
    }
  }
`;
