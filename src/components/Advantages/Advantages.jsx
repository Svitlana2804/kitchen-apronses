import { BlockA, BlockText, BlockTitle } from "./Advantages.style"

export default function Advantages(){
    return(
        <BlockA id="advantages">
          <BlockTitle>Переваги</BlockTitle>
        <BlockText>
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 100 60" 
  width="100" 
  height="60" 
  fill="none" 
  stroke="black" 
  stroke-width="2">
  
  <path
    d="M5,20 Q15,5 40,10 Q65,5 95,20 Q85,55 10,50 Q5,35 5,20 Z"
    fill="#FFD700" />
  
  <circle cx="25" cy="25" r="4" fill="#FFA500" />
  <circle cx="50" cy="15" r="3" fill="#FFA500" />
  <circle cx="70" cy="35" r="5" fill="#FFA500" />
  <circle cx="40" cy="40" r="3" fill="#FFA500" />
  <circle cx="60" cy="25" r="4" fill="#FFA500" />
</svg>
Легкість догляду</BlockText>
        <BlockText>
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 64 64" 
  width="100" 
  height="100" 
  fill="none" 
  stroke="black" 
  stroke-width="2">
  <path 
    d="M32 2 L50 12 C50 32 42 52 32 62 C22 52 14 32 14 12 Z" 
    fill="#B0C4DE" 
    stroke="#4682B4" 
    stroke-width="2" />
  <path 
    d="M32 8 L44 16 C44 30 38 48 32 56 C26 48 20 30 20 16 Z" 
    fill="#4682B4" />
  <polyline 
    points="20,30 28,40 44,20" 
    fill="none" 
    stroke="#FFFFFF" 
    stroke-width="4" 
    stroke-linecap="round" 
    stroke-linejoin="round" />
</svg>
            Стійкість до пошкоджень</BlockText>
        <BlockText>
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 64 64" 
  width="100" 
  height="100" 
  fill="none" 
  stroke="black" 
  stroke-width="2">
  <path 
    d="M10 48 L20 38 L26 44 L16 54 Z" 
    fill="#D2691E" 
    stroke="#8B4513" 
    stroke-width="2" />
  <rect 
    x="20" 
    y="38" 
    width="10" 
    height="6" 
    fill="#C0C0C0" 
    stroke="#808080" />
  <path 
    d="M30 36 C34 30, 44 32, 50 28 Q52 40, 40 44 C35 45, 30 40, 30 36 Z" 
    fill="#FFD700" 
    stroke="#DAA520" />
  <path 
    d="M50 28 Q54 22, 60 26 T50 28 Z" 
    fill="#FF6347" 
    stroke="#FF4500" />
</svg>

            Індивідуальний дизайн</BlockText>
        </BlockA>
    )
}