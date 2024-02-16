import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Container>
      <h1 className="green">My Skills</h1>
      <br />
      <IconContainer></IconContainer>
      <img
        src="/icons/react.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/css.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/express.jpeg"
        title="React"
        alt="React"
        width="80"
        height="80"
        background-color="white"
      />
      <img
        src="/icons/figma.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/html.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/java.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/javascript.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/mongo.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/mysql.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      {/* <img
        src="/icons/nodejs.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      /> */}
      <img
        src="/icons/postgresql.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/typescript.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/vscode.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/git.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/mocha.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/docker.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
      <img
        src="/icons/netlify.svg"
        title="React"
        alt="React"
        width="80"
        height="80"
      />
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 0px;
  padding: 3rem 0;
  /* display: flex; */
  /* Change to column for small screens */
  /* align-items: center; */

  h1 {
    font-size: 1.9rem;
    margin-bottom: 0px;
    text-align: center;
  }
`;

const IconContainer = styled.div`
  margin-top: 10px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
`;
