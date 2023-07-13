import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Container>
      <Header />
      hello{" "}
    </Container>
  );
}

export default App;
