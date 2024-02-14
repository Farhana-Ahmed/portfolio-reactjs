import React from "react";
import styled from "styled-components";
import profilepic from "../assets/linkedinprofile.jpeg";
const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={profilepic} alt="" />
        <h1>Portfolio</h1>
      </Logo>
      <Navbar>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#home">Skills</a>
        </span>
        <span>
          <a href="#home">Projects</a>
        </span>
        <span>
          <a href="#home">Contact</a>
        </span>
      </Navbar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
`;
const Logo = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  gap: 1rem;
  img {
    width: 8rem;
    clip-path: circle(50% at 50% 50%);
    filter: drop-shadow(0px 10px 10px #d19a9a);
  }
  h1 {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const Navbar = styled.div`
  span {
    margin-left: 1rem;

    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
    }
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #fff;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }
    :hover:before {
      transform: scale(1);
      transform-origin: left;
    }
    :hover {
      opacity: 0.7;
    }
  }
`;
