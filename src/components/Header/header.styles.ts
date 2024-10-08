import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.bgColor};
    display: flex;
    justify-content: center;
`;

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 4rem;
    @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 2rem;
    gap: 1rem;
    list-style-type: square;
  }
`;

export const NavItem = styled.li`
  margin-right: 1rem;
  display: flex;
  gap: 0.45rem;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
  @media (max-width: 768px) {
  width: 100%;
  text-align: center;
  margin: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.shadowColor};

  a {
    font-size: 24px;
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
    margin-bottom: 1rem;
  }
}

`;

export const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: ${(props) => props.theme.textColor};
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0;
    position: fixed;
    right: 15px;
    top: 15px;
    z-index: 1000;
  }
`;
export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
