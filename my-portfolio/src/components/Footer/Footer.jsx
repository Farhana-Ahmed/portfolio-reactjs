import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Slide, Zoom } from "react-awesome-reveal";
const Footer = () => {
  return (
    <Container id="contact">
      <ContactInfo>
        <Slide direction="left" delay={1}>
          <h1>Contact Info</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address: </h1>
          </Slide>
          <Slide direction="left">
            <p>Rosmertastraat,3,1363XV,Almere</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Email:</h1>
          </Slide>

          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide direction="left">
              <a href="mailto:farhana.khashiya@gmail.com">
                farhana.khashiya@gmail.com
              </a>
            </Slide>
          </div>
        </div>
        <div className="socialprofiles">
          <Slide direction="left">
            <h1>Check out my</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/Farhana-Ahmed">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/farhanakhashiya/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
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
          background: rgb(188, 100, 100);
        }

        a {
          margin-top: 0%.2rem;
          color: #fff;
        }
      }
    }
  }
`;
