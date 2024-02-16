import React from "react";
import styled from "styled-components";
import { IoCodeWorkingOutline } from "react-icons/io5";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      {
        <Container id="projects">
          <h1 className="green">Projects</h1>
          <Cards>
            <Card
              Icon={IoCodeWorkingOutline}
              title={"Project1"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedn"
              }
            />
            <Card
              Icon={IoCodeWorkingOutline}
              title={"Project2"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedn"
              }
            />
            <Card
              Icon={IoCodeWorkingOutline}
              title={"Project3"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              }
            />
            <Card
              Icon={IoCodeWorkingOutline}
              title={"Project3"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              }
            />{" "}
            <Card
              Icon={IoCodeWorkingOutline}
              title={"Project3"}
              desc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              }
            />
          </Cards>
        </Container>
      }
    </div>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  h1 {
    padding-top: 1rem;
    font-size: 1.9rem;
    margin-bottom: 0px;
    text-align: center;
  }
  @media (max-width: 840px) {
    width: 90%;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */

  gap: 1rem;
`;
