import styled from "@emotion/styled";

export const NavMenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkMenu = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  &:hover {
   box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    color: blue;
  }
`;

export const BurgerIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuWrapper = styled.div`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 50px;
    left: 0;
    width: 25%;
    background-color: white;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  }
`;