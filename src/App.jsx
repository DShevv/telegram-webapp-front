import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Provider from "./utils/context";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Provider>
      <Container>
        <Header />
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
