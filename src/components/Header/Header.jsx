import {BlockNav, Logo,
    SectionNav,
   } from "./Header.style.jsx"
import LogoImg from "../../assets/logo.webp"
import NavMenu from "./NavMenu/NavMenu.jsx"
import ButtonOrder from "./NavMenu/ButtonOrder/ButtonOrder.jsx"
export default function Header(){
   return(
      
    <SectionNav>
   <BlockNav>
    <Logo  src={LogoImg} alt="logo"/>
    <NavMenu/>
    </BlockNav>
    <ButtonOrder/>
   </SectionNav>
   
   
   ) 
}