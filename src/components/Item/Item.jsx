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
  position: relative;
`;

const CountLabel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  top: 0;
  left: 100%;
  transform: translateX(-100%);

  border-radius: 50%;
  background: #ffbb00;
  color: white;
`;

const Image = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
`;

export default function Item({ data }) {
  const { addItem, removeItem, isInCart, getCount } = useContext(Context);
  const count = getCount(data.id);

  function onAdd() {
    addItem(data);
  }

  function onRemove() {
    removeItem(data.id);
  }

  return (
    <Container>
      {count ? <CountLabel>{count}</CountLabel> : ""}
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
