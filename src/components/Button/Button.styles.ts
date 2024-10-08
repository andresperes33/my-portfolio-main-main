import styled from "styled-components";

export const ThemeToggle = styled.button`
    background-color: ${(props) => props.theme.secondaryColor};
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top: 2rem;
  animation: aTwsK 3s ease-in-out infinite;
  filter: drop-shadow(1px 1px 2px ${(props) => props.theme.shadowColor});

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 32px;
    top: 4rem;
  }
`;
