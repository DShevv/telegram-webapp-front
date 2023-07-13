import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Container>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </Container>
  );
}

export default App;
