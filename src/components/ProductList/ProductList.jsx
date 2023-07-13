import { styled } from "styled-components";
import Item from "../Item/Item";

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
  return (
    <Container>
      {data.map((elem) => {
        return <Item key={elem.id} data={elem} />;
      })}
    </Container>
  );
}
