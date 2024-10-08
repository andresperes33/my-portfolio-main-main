import { useEffect, useState } from "react";
import LogoImg from "../../assets/perfil_image.png";
import {
  Blob,
  ButtonContainer,
  Description,
  Div,
  HeroContent,
  HeroSection,
  HeroVisual,
  PrimaryButton,
  ProfileImage,
  SecondaryButton,
  SubTitle,
  Title,
} from "./home.styles";

const Home: React.FC = () => {
  const titles = ["Software Engineer", "Desenvolvedor Front-end"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullTitle = titles[currentIndex];

      if (!isDeleting && currentTitle.length < fullTitle.length) {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length + 1));
        timer = setTimeout(handleTyping, 150);
      } else if (isDeleting && currentTitle.length > 0) {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length - 1));
        timer = setTimeout(handleTyping, 100);
      } else if (currentTitle.length === fullTitle.length) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentTitle.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        timer = setTimeout(handleTyping, 1000);
      }
    };

    timer = setTimeout(handleTyping, 150);

    return () => clearTimeout(timer);
  }, [currentTitle, currentIndex, isDeleting]);

  return (
    <HeroSection $isLoaded={isLoaded}>
      <HeroContent $isLoaded={isLoaded}>
        <Div>Olá eu sou</Div>
        <Title>André da Silva Peres</Title>
        <SubTitle className="typing">{currentTitle}</SubTitle>
        <Description>
          Sou desenvolvedor full-stack especializado em React, Next.js,
          TypeScript e SCSS, com experiência na criação de interfaces modernas e
          responsivas. Utilizo Vite.js para otimização de projetos e Styled
          Components para garantir um estilo consistente. Além disso, desenvolvo
          APIs RESTful com Node.js utilizando TypeScript e faço uso do Insomnia
          para testar e depurar essas APIs, assegurando alta performance e
          escalabilidade. Tenho um sólido conhecimento técnico em HTML, CSS,
          JavaScript e já desenvolvi diversos projetos práticos, aplicando essas
          habilidades em cenários reais. Estou sempre em busca de novas
          tecnologias e métodos para aprimorar minhas competências e entregar
          soluções inovadoras e eficientes.
        </Description>
        <ButtonContainer>
          <PrimaryButton to="/contact">Diga Olá!</PrimaryButton>
          <SecondaryButton to="/projects">Meus Projetos</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
      <HeroVisual>
        <Blob viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M39.9,-51.3C50.9,-46.1,58.5,-33.9,63.5,-20.1C68.4,-6.2,70.7,9.4,65.7,22.1C60.7,34.8,48.4,44.7,35.8,52.5C23.2,60.3,10.3,66,-3.1,69.8C-16.5,73.6,-33,75.5,-45.1,68.5C-57.2,61.5,-64.9,45.6,-69.5,29.7C-74.2,13.8,-75.8,-2.1,-72.8,-17.1C-69.8,-32.1,-62.2,-46.2,-50.3,-51.3C-38.4,-56.3,-22.3,-52.2,-7,-46.9C8.3,-41.6,28.8,-56.5,39.9,-51.3Z"
            transform="translate(100 100)"
          />
        </Blob>
        <ProfileImage src={LogoImg} alt="Foto Perfil" $isLoaded={isLoaded} />
      </HeroVisual>
    </HeroSection>
  );
};

export default Home;
