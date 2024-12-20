import { Email, FacebookImg, Follow, FooterSection, InfoFooter, InfoFooterText, Phone, TextFooter } from "./Footer.style";
import Facebook from '../../assets/facebook.webp'
export default function Footer(){
    return(
        <FooterSection id="contacts">
          <TextFooter>© 2024 by SkloKitchen</TextFooter>

          <InfoFooter>
            <Phone>
              <InfoFooterText>Телефон</InfoFooterText>
              <a href="tel:+380971966019">+380000000000</a>
            </Phone>
            <Email>
              <InfoFooterText>Email</InfoFooterText>
              <a href="mailto:sklo@ukr.net">
                sklo@ukr.net
              </a>
            </Email>
            <Follow>
              <InfoFooterText>Підписатися</InfoFooterText>
              <a href="/">
                <FacebookImg src={Facebook} alt="facebook"/>
              </a>
            </Follow>
          </InfoFooter>
        </FooterSection>
    )
}