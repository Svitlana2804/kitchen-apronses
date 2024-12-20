import { useState } from 'react';
import { LinkMenu, NavMenuList, BurgerIcon, MenuWrapper } from './NavMenu.style';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerIcon onClick={toggleMenu}>☰</BurgerIcon>
      <MenuWrapper isOpen={isOpen}>
        <NavMenuList>
          <li><LinkMenu href="*">Головна</LinkMenu></li> 
          <li><LinkMenu href="#advantages">Переваги</LinkMenu></li>
          <li><LinkMenu href="#catalog">Каталог</LinkMenu></li>
          <li><LinkMenu href="#reviews">Відгуки</LinkMenu></li>
          <li><LinkMenu href="#contacts">Контакти</LinkMenu></li>
        </NavMenuList>
      </MenuWrapper>
    </>
  );
}
