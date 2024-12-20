import { CatalogBlock, CatImg, TextOverlay, CatalogItem, Description, CatalogTitle } from "./Catalog.style";
import Photo1 from "../../assets/camomile.webp";
import Photo2 from "../../assets/coffee.webp";
import Photo3 from "../../assets/fruits.webp";
import Photo4 from "../../assets/home.webp";
import Photo5 from "../../assets/lavande.webp";
import Photo6 from "../../assets/orchidea.webp";
import Photo7 from "../../assets/uzbeck.webp";
import React, { useState } from "react";
export default function Catalog() {
    const [activeDescription, setActiveDescription] = useState(null);
    const toggleDescription = (index) => {
        setActiveDescription(activeDescription === index ? null : index);
      };
  return (
    <>
  <CatalogTitle id="catalog">Каталог нашої продукції</CatalogTitle>
    <CatalogBlock >
      <CatalogItem>
        <CatImg src={Photo1} alt="img1" />
        <TextOverlay onClick={toggleDescription}>Подробиці</TextOverlay>
        <TextOverlay onClick={() => toggleDescription(0)}>Подробиці</TextOverlay>
        {activeDescription === 0 && (
          <Description>Опис плитки: висота - 1200мм, ширина - 600мм, товщина - 100мм. Виробник: Україна</Description>
        )}
      </CatalogItem>
      <CatalogItem>
        <CatImg src={Photo2} alt="img2" />
        <TextOverlay onClick={toggleDescription}>Подробиці</TextOverlay>
        <TextOverlay onClick={() => toggleDescription(1)}>Подробиці</TextOverlay>
        {activeDescription === 1 && (
          <Description>Опис плитки: висота - 1200мм, ширина - 600мм, товщина - 100мм Виробник: Україна</Description>
        )}
      </CatalogItem>
      <CatalogItem>
        <CatImg src={Photo3} alt="img3" />
        <TextOverlay onClick={toggleDescription}>Подробиці</TextOverlay>
        <TextOverlay onClick={() => toggleDescription(2)}>Подробиці</TextOverlay>
        {activeDescription === 2 && (
          <Description>Опис плитки: висота - 1200мм, ширина - 600мм, товщина - 100мм Виробник: Україна</Description>
        )}
      </CatalogItem>
      <CatalogItem>
        <CatImg src={Photo4} alt="img4" />
        <TextOverlay onClick={toggleDescription}>Подробиці</TextOverlay>
        <TextOverlay onClick={() => toggleDescription(3)}>Подробиці</TextOverlay>
        {activeDescription === 3 && (
          <Description>Опис плитки: висота - 1200мм, ширина - 600мм, товщина - 100мм Виробник: Україна</Description>
        )}
      </CatalogItem>
      <CatalogItem>
        <CatImg src={Photo5} alt="img5" />
        <TextOverlay onClick={toggleDescription}>Подробиці</TextOverlay>
        <TextOverlay onClick={() => toggleDescription(4)}>Подробиці</TextOverlay>
        {activeDescription === 4 && (
          <Description>Опис плитки: висота - 1200мм, ширина - 600мм, товщина - 100мм Виробник: Україна</Description>
        )}
      </CatalogItem>
      <CatalogItem>
        <CatImg src={Photo6} alt="img6" />
        <TextOverlay onClick={toggleDescription}>Подробиці</TextOverlay>
        <TextOverlay onClick={() => toggleDescription(5)}>Подробиці</TextOverlay>
        {activeDescription === 5 && (
          <Description>Опис плитки: висота - 1200мм, ширина - 600мм, товщина - 100мм Виробник: Україна</Description>
        )}
      </CatalogItem>
      <CatalogItem>
        <CatImg src={Photo7} alt="img7" />
        <TextOverlay onClick={toggleDescription}>Подробиці</TextOverlay>
        <TextOverlay onClick={() => toggleDescription(6)}>Подробиці</TextOverlay>
        {activeDescription === 6 && (
          <Description>Опис плитки: висота - 1200мм, ширина - 600мм, товщина - 100мм Виробник: Україна</Description>
        )}
      </CatalogItem>
    </CatalogBlock>
    </>
  );
}
