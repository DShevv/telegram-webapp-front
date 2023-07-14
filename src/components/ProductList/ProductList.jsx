import { styled } from "styled-components";
import { useCallback, useEffect } from "react";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const data = [
  {
    id: 1,
    title: "Title 1",
    price: 5.99,
  },
  {
    id: 2,
    title: "Title 2",
    price: 10.99,
  },
  {
    id: 3,
    title: "Title 3",
    price: 15.99,
  },
  {
    id: 4,
    title: "Title 4",
    price: 20.99,
  },
  {
    id: 5,
    title: "Title 5",
    price: 25.99,
  },
  {
    id: 6,
    title: "Title 6",
    price: 30.99,
  },
  {
    id: 7,
    title: "Title 7",
    price: 35.99,
  },
  {
    id: 8,
    title: "Title 8",
    price: 40.99,
  },
  {
    id: 9,
    title: "Title 9",
    price: 45.99,
  },
];

export default function ProductList() {
  const { tg } = useTelegram();
  const navigate = useNavigate();

  const toCart = useCallback(() => {
    navigate("/cart");
  }, []);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "View order",
    });

    tg.onEvent("mainButtonClicked", toCart);

    return () => {
      tg.offEvent("mainButtonClicked", toCart);
    };
  }, []);

  return (
    <Container>
      {data.map((elem) => {
        return <Item key={elem.id} data={elem} />;
      })}
    </Container>
  );
}
