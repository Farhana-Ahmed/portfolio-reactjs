import styled from "styled-components";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <About />
      </Banner>
      <ContainerLight>
        <Skills />
      </ContainerLight>
      <Projects />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient()
    (159deg, rgb(45, 45, 58) 0%, rgb(45, 43, 53) 100%);
  height: 100vh;

  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`;

const ContainerLight = styled.div`
  /* margin-bottom: 0px; */
  margin-top: -50px;
  background: linear-gradient()
    (159deg, rgb(45, 45, 58) 0%, rgb(45, 43, 53) 100%);
`;
