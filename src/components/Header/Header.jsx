import { styled } from "styled-components";
import Button from "../Button/Button";

const StyledHeader = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: var(--tg-theme-text-color);
`;

export default function Header() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  return (
    <StyledHeader>
      <Button onClick={onClose}>Close</Button>
      <UserName>{tg.initDataUnsafe?.user?.username}</UserName>
    </StyledHeader>
  );
}
