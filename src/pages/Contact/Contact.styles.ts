import styled, { keyframes } from "styled-components";

export const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

export const ContactContainer = styled.div<{ $isLoaded: boolean }>`
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  min-height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

export const ContactHeader = styled.div`
  display: flex;
  position: relative;
  margin: 2rem;
  flex-direction: column;
`;

export const ContactTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 1px;
  text-shadow: 2px 2px 4px ${(props) => props.theme.shadowColor};
  &::before, &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    background-color:${(props) => props.theme.primaryColor};
    left: 0;
  }

  &::before {
    width: 5rem;
    bottom: -10px;
  }

  &::after {
    bottom: -18px;
    width: 3rem;
  }
`;

export const ContainerText = styled.div<{ $isLoaded: boolean }>`
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  text-shadow: 2px 2px 4px ${(props) => props.theme.shadowColor};
  margin: 2rem 0 0 0;
`;

export const ContainerIcons = styled.div<{ $isLoaded: boolean }>`
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-out 0.3s, transform 0.9s ease-out 0.6s;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1.875rem;
  margin: 2rem 0 2rem 4rem;
  >div {
    display: flex;
    flex-direction: column;
    align-items: center;
  &:hover {
    color: ${(props) => props.theme.primaryColor};
    transform: translateY(-3px);
    }
}
@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.875rem;
  justify-content: center;
  margin: 0;
  }
`;

export const ReflexLink = styled.a`
  font-size: 1.43rem;
  font-weight: bold;
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    #3162ce, 
    #63b1ed,  
    #3162ce  
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${shine} 2s linear infinite;
  transition: color 0.3s ease;
  text-shadow: 2px 2px 4px ${(props) => props.theme.shadowColor};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
