import { useContext, useEffect } from "react";
import { styled } from "styled-components";
import { Context } from "../../utils/context";
import { useTelegram } from "../../hooks/useTelegram";
import burger from "../../assets/burger.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--tg-theme-text-color);
  text-transform: capitalize;
`;

const Edit = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  background: none;
  color: #48c058;
  cursor: pointer;
  outline: none;
`;

const Header = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 20px;
`;

const ItemTitle = styled.div`
  font-size: 14px;
  color: var(--tg-theme-text-color);
`;

const ItemValue = styled.div`
  font-size: 14px;
  color: var(--tg-theme-text-color);
`;

const ItemCount = styled.div`
  font-size: 14px;
  color: #c0a448;
`;

const Image = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
`;

export default function Cart() {
  const { cartItems, getCartPrice } = useContext(Context);
  const { tg } = useTelegram();
  const navigate = useNavigate();

  const toProductList = () => {
    navigate("/");
  };

  useEffect(() => {
    tg.MainButton.setParams({
      text: `PAY $${getCartPrice()}`,
      color: "#48c058",
    });
  }, []);

  return (
    <Container>
      <Header>
        <Title>your order</Title>
        <Edit onClick={toProductList}>edit</Edit>
      </Header>
      <div>
        {cartItems.map((elem) => {
          return (
            <Item key={elem.id}>
              <Image src={burger} />
              <div>
                <ItemTitle>{elem.title}</ItemTitle>
                <ItemCount>{elem.count}</ItemCount>
              </div>
              <ItemValue>{elem.price}</ItemValue>
            </Item>
          );
        })}
      </div>
    </Container>
  );
}
