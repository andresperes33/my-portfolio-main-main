import { Link } from "react-router-dom";
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
export const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;

`;

export const Name = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.textColor};
  span {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color:  ${(props) => props.theme.clinColor};
  line-height: 1.6;
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;

`;

export const ContactItem = styled.a`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.shadowColor};
  color:  ${(props) => props.theme.clinColor};
  
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const SkillIcon = styled.img`
  width: 3rem;
  height: 3rem;

  &:hover {
    transform: translateY(-5px); 

  }
`;

export const Button = styled(Link)`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 10px 10px 0;
  cursor: pointer;
  border-radius: 5px;
`;

export const TimelineSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

`;
export const TimelineColumn = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 31%;
    bottom: 8%;
    width: 2px;
    background-color: ${(props) => props.theme.primaryColor};
    box-shadow: 0 1px 15px ${(props) => props.theme.bthov};
    @media (max-width: 768px) {
      display: none;
  }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 5px;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 50%;
    box-shadow: 0 1px 15px ${(props) => props.theme.bthov};
  }
`;

export const TimelineTitle = styled.h3`
  color:  ${(props) => props.theme.clinColor};
  margin-bottom: 5px;
`;

export const TimelineDate = styled.span`
  color:  ${(props) => props.theme.primaryColor};
  font-size: 0.9em;
`;

export const TimelineDescription = styled.p`
  color:  ${(props) => props.theme.clinColor};
  margin-top: 5px;
  font-size: 1.1rem;
`;
