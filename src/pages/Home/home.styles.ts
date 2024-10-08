import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type IsLoadedProps = {
	$isLoaded: boolean;
};

export const HeroSection = styled.section<IsLoadedProps>`
  padding: 0 10%;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    min-height: 100vh;
    gap: 0;
  }
`;

export const HeroContent = styled.div<IsLoadedProps>`
  flex: 1;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s;
  
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

export const Div = styled.div`
    width: 95px;
    font-weight: bold;
    text-align: center;
    font-size: 17px;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 1rem;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    animation: aTwsK 8s ease-in-out infinite;
    filter: drop-shadow(0 6px 15px ${(props) => props.theme.primaryColor});
    
`;
export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px ${(props) => props.theme.shadowColor};
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 36px;
  color: ${(props) => props.theme.primaryColor};
  margin-top: 0;
  min-height: 43px;

  &.typing::after {
    content: '|';
    animation: ${keyframes`
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    `} 0.7s infinite;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0;
  }
`;
export const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.6;
    text-shadow: 2px 2px 4px ${(props) => props.theme.shadowColor};
    @media (max-width: 768px) {
      font-size: 15px;
    margin: 0;
  }
`;

export const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }

`;
export const ProfileImage = styled.img<IsLoadedProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(${(props) => (props.$isLoaded ? 1 : 0.9)});
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
  opacity: ${(props) => (props.$isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s;

`;
const blobAnimation = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.05) rotate(5deg); }
`;

export const Blob = styled.svg`
    width: 38rem;
    height: 35rem;
    color: ${(props) => props.theme.primaryColor};
  animation: ${blobAnimation} 8s ease-in-out infinite;
  filter: drop-shadow(0 10px 15px ${(props) => props.theme.primaryColor});
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;
`;

export const Button = styled.a`
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px ${(props) => props.theme.shadowColor};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 8px ${(props) => props.theme.shadowColor};
  }
`;

export const PrimaryButton = styled(Link)`
  width: 8rem;
  height: 3rem;
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 21px;
  font-weight: bold;
  justify-content: center;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  filter: drop-shadow(0 2px 5px ${(props) => props.theme.primaryColor});
  &:hover {
    transform: translateY(-3px);
    }

`;

export const SecondaryButton = styled(Link)`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};
  filter: drop-shadow(0 2px 5px ${(props) => props.theme.primaryColor});
  width: 8rem;
  height: 3rem;
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 21px;
  font-weight: bold;
  justify-content: center;
  &:hover {
    transform: translateY(-3px);
    }
`;
