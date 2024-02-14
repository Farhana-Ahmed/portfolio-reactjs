import React, { useState } from "react";
import styled from "styled-components";
import profilepic from "../assets/linkedinprofile.jpeg";
const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <Container hamburger={hamburger}>
      <Logo>
        <img src={profilepic} alt="" />
        <h1>Portfolio</h1>
      </Logo>
      <Navbar hamburger={hamburger}>
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
      <div className="menu" onClick={() => setHamburger(!hamburger)}>
        <div className="hamburger"></div>
      </div>
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
  @media (max-width: 768px) {
    width: 90%;
  }
  .menu {
    display: none;
  }

  @media (max-width: 640px) {
    .menu {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
      .hamburger {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) =>
          props.hamburger ? "transparent" : "#fff"};
        transition: all 400ms ease-in-out;
        &::before,
        &::after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }

        &::before {
          transform: ${(props) =>
            props.hamburger ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        &::after {
          transform: ${(props) =>
            props.hamburger ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

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
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #257060;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    height: ${(props) => (props.hamburger ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 99;
  }

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
