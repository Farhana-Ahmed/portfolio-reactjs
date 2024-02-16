import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Text>
        <h1>Hello I am</h1>
        <h1 className="green">Fullstack Developer</h1>

        <p>
          Passionate and curious developer with good problem solving skills.
          Enthusiastic,responsible and flexible person with ability to learn and
          collaborate in to rapidly evolving environments.Experience in
          Java,Javascripe/typescript,HTML,CSS,React,Azure,TDD,CI/CD,agile and
          kanban
        </p>
      </Text>
      <Details>
        <ul>
          <li>
            <strong className="green">Name:</strong> <span>Farhana</span>
          </li>
          <li>
            <strong>Email:</strong> farhana.khashiya@gmail.com
          </li>
          <li>
            <strong>City:</strong> Amsterdam
          </li>
        </ul>
      </Details>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin-left: 50px;
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
    padding-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
    padding-bottom: 1.5rem;
  }

  h3 {
    font-weight: 500;
    font-size: 1rem;
    padding-bottom: 1.5rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 640px) {
    p {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

const Details = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 0 10px;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 10px;
    border-bottom: 2px solid #333;
  }

  @media (max-width: 840px) {
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px 0;

      &:not(:lastchild) {
        border-bottom: 2px solid #333;
      }
    }
  }
`;
