import React from "react";
import styled from "styled-components";
import SliderComponent from "./SliderComponent";
const Projects = () => {
  return (
    <div>
      <Container>
        <h1 className="green"> Projects</h1>
        <p>
          These are some of my full stack projects almost all of them have been
          developed using JS/TS,node,express and react
        </p>
      </Container>
      <Slide>
        <SliderComponent />
      </Slide>
    </div>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;

  h1 {
    font-size: 1.9rem;
  }
  p {
    width: 30rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
  }
`;
const Slide = styled.div``;
