import { styled } from "styled-components";
import burger from "../../assets/burger.svg";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Container = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
`;

export default function Item({ data }) {
  const { addItem, removeItem, isInCart } = useContext(Context);

  function onAdd() {
    addItem(data);
  }

  function onRemove() {
    removeItem(data.id);
  }

  return (
    <Container>
      <Image src={burger} />
      <span>
        {data.title} <strong>{data.price}</strong>
      </span>

      {isInCart(data.id) ? (
        <div>
          <button onClick={onAdd}>+</button>
          <button onClick={onRemove}>-</button>
        </div>
      ) : (
        <button onClick={onAdd}>add</button>
      )}
    </Container>
  );
}
