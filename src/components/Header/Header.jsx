import { styled } from "styled-components";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  background: var(--tg-theme-bg-color);
  justify-content: space-between;
  padding: 5px 15px;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: var(--tg-theme-text-color);
`;

export default function Header() {
  const { user, onClose } = useTelegram();

  return (
    <StyledHeader>
      <Button onClick={onClose}>Close</Button>
      <UserName>{user?.username}</UserName>
    </StyledHeader>
  );
}
