import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 2rem;

`;

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease;
  height: 250px;


  &:hover {
    transform: translateY(-5px);

  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 1%);
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  
`;

export const CardOverlay = styled.div<{ isHovered: boolean }>`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, .90);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  border: 1px solid ${(props) => props.theme.primaryColor};
`;

export const CardDescription = styled.p`
  color: white;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.66;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  
`;

export const LinkButton = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: black;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
`;
export const ImageIcon = styled.img`
  width: 2rem; 
  height: 2rem;

`;
