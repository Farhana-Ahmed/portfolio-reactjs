import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <ContactInfo>
        <h1>Contact Info</h1>
        <div className="address">
          <h1>Address: </h1>
          <p>Rosmertastraat,3,1363XV,Almere</p>
        </div>
        <div className="links">
          <h1>Email:</h1>

          <div>
            <span>
              <HiOutlineMailOpen />
            </span>
            <a href="mailto:farhana.khashiya@gmail.com">
              farhana.khashiya@gmail.com
            </a>
          </div>
        </div>
        <div className="socialprofiles">
          <h1>Check out my</h1>
          <div className="icons">
            <span>
              <a href="/">
                <AiFillGithub />
              </a>
            </span>
            <span>
              <a href="/">
                <AiFillLinkedin />
              </a>
            </span>
          </div>
        </div>
      </ContactInfo>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
  padding: 3rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;

    h1 {
      font-size: 1.2rem;
    }
    p {
      width: 60%;
      padding-top: 0.5rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      align-items: center;
      gap: 0.5rem;
    }
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
      }
    }
  }
  .socialprofiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #257060;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        &:hover {
          background: #fff;
        }

        a {
          margin-top: 0%.2rem;
          color: #fff;
        }
      }
    }
  }
`;
