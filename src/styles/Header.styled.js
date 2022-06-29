import styled from "styled-components";

export const StyledHeader = styled.header`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary}ff,
    ${({ theme }) => theme.colors.secondary}00
  );
  padding: 1px 40px;
  display: flex;
  text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.secondary};

  h1 {
    color: ${({ theme }) => theme.colors.text};
  }

  nav {
    display: flex;
    //margin-left: auto;
    justify-content: right;
    margin-left: auto;
    margin-right: 100px;
    width: 70%;
  }

  a {
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1em;
    text-decoration: none;
    height: 100%;
    margin: 0 10px;
    align-items: center;
    text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.secondary};
  }

  a:hover {
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.tertiary};
  }

  .dropdown {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1em;
    margin: auto 10px;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    font-size: 0.75em;
    z-index: 1;
  }

  .dropdown:hover {
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.tertiary};
  }

  .dropdown-content a {
    float: none;
    color: black!;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    text-shadow: 0px 0px 0px black;
  }

  .dropdown-content a:hover {
    text-shadow: 0px 0px 4px ${({ theme }) => theme.colors.tertiary};
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  //background-color: ${(props) => props.bg};
  /* h1 {
        color:red;
    }
    // This lets you add rules to nested elements use &: to add features liek focus and hover
    &:hover{
        background-color: black;
    } */
`;
