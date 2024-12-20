import { BunnerBtn, BunnerSection, BunnerSubTitle, BunnerTitle } from "./Bunner.style";

export default function Bunner(){
    return(
        <BunnerSection>
            <BunnerTitle>
            Кухонні панелі зі скла – стиль і практичність для вашого інтер’єру.</BunnerTitle>
            <BunnerSubTitle>"Унікальні дизайни, якість, перевірена часом"</BunnerSubTitle>
            <BunnerBtn>Обрати дизайн</BunnerBtn>
        </BunnerSection>
    )
}