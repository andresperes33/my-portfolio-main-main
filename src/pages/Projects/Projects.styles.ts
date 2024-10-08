import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 0 10%;
  max-width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  @media (max-width: 768px) {
  flex-direction: column-reverse;
  min-height: 100vh;
  gap: 0;
  
  }
`;
