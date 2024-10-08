import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  filter: drop-shadow(1px 1px 2px ${(props) => props.theme.shadowColor});
`;

export const TextFooter = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: 1rem;
  `;
