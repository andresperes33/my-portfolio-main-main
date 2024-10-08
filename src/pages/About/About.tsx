import { techIcons } from "../../components/Card/techIcons";
import { useIsLoaded } from "../../contexts/IsLoadedContext";
import { ContactHeader, ContactTitle } from "../Contact/Contact.styles";
import {
  Button,
  ContactContainer,
  ContactInfo,
  ContactItem,
  Description,
  Name,
  PageContainer,
  SkillIcon,
  SkillIcons,
  TimelineColumn,
  TimelineDate,
  TimelineDescription,
  TimelineItem,
  TimelineSection,
  TimelineTitle,
} from "./About.styles";

const About: React.FC = () => {
  const { isLoaded } = useIsLoaded();

  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1Euqh55q_9IRwSPP1PsxmSvsUGNbRgjkx";
    link.download = "CV_JoaoBatista.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ContactContainer $isLoaded={isLoaded}>
      <ContactHeader>
        <ContactTitle>Sobre</ContactTitle>
      </ContactHeader>
      <PageContainer>
        <Name>
          Me chamo André da Silva Peres <span>Desenvolvedor Web</span>
        </Name>
        <Description>
          Sou fascinado pela tecnologia e suas transformações, o que me levou a
          buscar novas oportunidades na área de programação. Atualmente, estou
          cursando Análise e Desenvolvimento de Sistemas e estou sempre
          explorando novas ferramentas e linguagens. Sou proativo, adaptável e
          ansioso para enfrentar novos desafios, além de contribuir para
          soluções inovadoras. Além dos estudos, tenho me dedicado a projetos
          pessoais, aprimorando constantemente minhas habilidades e
          conhecimentos.
        </Description>
        <ContactInfo>
          <ContactItem>Cidade : Paracatu</ContactItem>
          <ContactItem>Estado : MG</ContactItem>
          <ContactItem
            href="mailto:andresperesdev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email: andresperesdev@gmail.com
          </ContactItem>
          <ContactItem href="tel:38999821883" target="_blank" rel="noreferrer">
            Telefone : (38) 99982-1883
          </ContactItem>
          <ContactItem
            href="https://www.linkedin.com/in/andresperes33/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn : andresperes33
          </ContactItem>
          <ContactItem
            href="https://github.com/andresperes33"
            target="_blank"
            rel="noreferrer"
          >
            GitHub : andresperes33
          </ContactItem>
        </ContactInfo>
        <div style={{ margin: "2rem 0" }}>
          <Button to="#" onClick={handleDownloadCV}>
            Baixar CV
          </Button>
          <Button to="/contact">Contate-me</Button>
        </div>
        <SkillIcons>
          <SkillIcon src={techIcons.Html} alt="HTML" />
          <SkillIcon src={techIcons.Css} alt="CSS" />
          <SkillIcon src={techIcons.JavaScript} alt="JavaScript" />
          <SkillIcon src={techIcons.React} alt="React" />
          <SkillIcon src={techIcons.TypeScript} alt="TypeScript" />
          <SkillIcon src={techIcons.Node} alt="Node.js" />
          <SkillIcon src={techIcons.Vite} alt="Vite" />
          <SkillIcon src={techIcons.Styled} alt="Styled Components" />
          <SkillIcon src={techIcons.PostreSQL} alt="PostgreSQL" />
          <SkillIcon src={techIcons.Backend} alt="Backend" />
          <SkillIcon src={techIcons.Bootstrap} alt="Bootstrap" />
          <SkillIcon src={techIcons.Git} alt="Git" />
          <SkillIcon src={techIcons.Restfull} alt="Restfull" />
          <SkillIcon src={techIcons.Express} alt="Express" />
        </SkillIcons>
        <TimelineSection>
          <TimelineColumn>
            <h2>Educação</h2>
            <TimelineItem>
              <TimelineTitle>
                Análise e Desenvolvimento de Sistemas
              </TimelineTitle>
              <TimelineDate>2024 - 2026</TimelineDate>
              <TimelineDescription>
                Estudando atualmente Análise e Desenvolvimento de Sistemas, com
                foco em arquitetura de software e desenvolvimento de aplicações.
                Experiência em modelagem de dados, gestão de projetos e
                requisitos.
              </TimelineDescription>
            </TimelineItem>
          </TimelineColumn>
          <TimelineColumn>
            <h2>Curso</h2>
            <TimelineItem>
              <TimelineTitle>FullStack - DevClub</TimelineTitle>
              <TimelineDate>2023 - 2024</TimelineDate>
              <TimelineDescription>
                A formação destaca uma abordagem prática com projetos reais
                desde o início, onde os alunos aprendem HTML/CSS, JavaScript,
                TypeScript, Frameworks como React para frontend e Node.js para
                backend, com ênfase no uso de Docker para gerenciamento de
                contêineres. O treinamento inclui o uso de ferramentas como
                Postgres, MongoDB,, Insomnia para testes de API, e Git e GitHub
                para controle de versão e colaboração, além do consumo eficaz de
                APIs de terceiros.
              </TimelineDescription>
            </TimelineItem>
          </TimelineColumn>
        </TimelineSection>
      </PageContainer>
    </ContactContainer>
  );
};

export default About;
