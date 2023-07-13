import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 10px 15px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
