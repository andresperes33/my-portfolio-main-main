import CarProject from "../../assets/imgproject/CarImage.png";
import Codburger from "../../assets/imgproject/Codeburger.png";
import ConvertMoney from "../../assets/imgproject/ConvertMoney.png";
import GithubFinder from "../../assets/imgproject/GithubFinder.png";
import OnePiece from "../../assets/imgproject/Onepiece.png";
import Starbucks from "../../assets/imgproject/Starbucks.png";
import TibiaProject from "../../assets/imgproject/Tibia.png";
import Backend from "../../assets/imgproject/backend.png";
import Dice from "../../assets/imgproject/dice.png";
import Gta from "../../assets/imgproject/gta.png";
import Netflix from "../../assets/imgproject/netflix.png";
import Portfolio from "../../assets/imgproject/portfolio.png";
import RsSuportes from "../../assets/imgproject/rssuporte.png";
import uniformes from "../../assets/imgproject/uniforme.png"
import lavanderia from "../../assets/imgproject/site-lavanderia .png"

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  github: string;
  deploy: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Site Lavanderia Lavup Toledo-PR",
    image: lavanderia,
    description:
      "Projeto completo de um site para uma Lavanderia de Auto Atendimento", 
    github: "",
    deploy: "https://lavanderiaautoatendimentolavuptoledo.com/",
    technologies: ["Html", "Css", "JavaScript"],
  },

  {
    id: 1,
    title: "Site Loja Uniformes Personalizados",
    image: uniformes,
    description:
      "Projeto completo de um site para uma loja de uniformes personalizados", 
    github: "",
    deploy: "https://chamauniformespersonalizados.netlify.app/",
    technologies: ["Html", "Css", "JavaScript"],
  },

  {
    id: 1,
    title: "Code Burger",
    image: Codburger,
    description:
      "Projeto completo FullStack, contando com tela de login, registrar, página principal, página categorias, carrinho. contando com tela de admin onde pode ser adicionado produtos, categorias, editar, deletar e atualizar status dos pedidos. ",
    github: "",
    deploy: "https://code-burger-interface-five.vercel.app/login",
    technologies: [
      "React",
      "Node",
      "PostreSQL",
      "Styled",
      "JavaScript",
      "Restfull",
      "Git",
    ],
  },

  {
    id: 2,
    title: "Landing Page Car",
    image: CarProject,
    description:
      "Para este projeto, desenvolvi uma landing page de amostra de carros utilizando HTML, CSS e JavaScript. O objetivo foi criar um site dinâmico e visualmente atraente que destaca as principais características dos veículos exibidos.",
    github: "https://github.com/andresperes33/Site-tesla?tab=readme-ov-file",
    deploy: "https://andresperes33.github.io/Site-tesla/",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    id: 3,
    title: "Ecommerce de Eletrônicos",
    image: GithubFinder,
    description: "Este projeto é um site de ecommerce chamado Red Store.",
    github: "https://github.com/andresperes33/ecommerce",
    deploy: "https://andresperes33.github.io/ecommerce/",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Styled",
      "Express",
      "Restfull",
      "Git",
    ],
  },
  {
    id: 4,
    title: "Landing Tibia MMORP",
    image: TibiaProject,
    description: "Página inspirada no MMORPG Tibia.",
    github: "",
    deploy: "https://tibia-react-vite.vercel.app/",
    technologies: ["Vite", "React", "JavaScript", "Styled", "Express"],
  },

  {
    id: 5,
    title: "Convert Money",
    image: ConvertMoney,
    description:
      "O objetivo principal dessa aplicação é proporcionar aos usuários a capacidade de realizar conversões de valores de moedas de diferentes países.",
    github: "https://github.com/andresperes33/conversor-de-moedas",
    deploy: "https://andresperes33.github.io/conversor-de-moedas/",
    technologies: ["Html", "Css", "JavaScript", "Express"],
  },
  {
    id: 6,
    title: "My Portfólio",
    image: Portfolio,
    description:
      "Projeto criado em React+Vite com TypeScript, portfólio com path de contato, tela inicial, sobre e projetos.",
    github: "",
    deploy: "",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "JavaScript",
      "Styled",
      "Git",
    ],
  },
  {
    id: 7,
    title: "Dice Show",
    image: Dice,
    description:
      "O objetivo principal dessa aplicação é sortear um numero aleatorio entre o numero inicial e o final que cosiste na escolha do usuaro.",
    github: "",
    deploy: "",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    id: 8,
    title: "Landing One Piece",
    image: OnePiece,
    description:
      "Criei uma landing page inspirada no universo do anime One Piece, com o objetivo de capturar a essência e o estilo visual da série. A página foi projetada para ser atraente e fácil de navegar, proporcionando uma experiência imersiva aos fãs do anime.",
    github: "",
    deploy: "",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    id: 9,
    title: "Page RS Suportes",
    image: RsSuportes,
    description:
      "Site Projetado para o cliente de ferragens e suportes de calhas. (Atualmente no ar)",
    github: "",
    deploy: "",
    technologies: ["Html", "Css", "JavaScript", "Bootstrap"],
  },
  {
    id: 10,
    title: "Starbucks LandingPage",
    image: Starbucks,
    description: "LandingPage do Starbucks.",
    github: "",
    deploy: "",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    id: 11,
    title: "Backend Code Burger",
    image: Backend,
    description:
      "A arquitetura deste projeto backend é modular e organizada. Contendo controllers, middlewares, models, e esquemas de dados (schemas). A pasta config contém configurações de autenticação (auth.js), banco de dados, e upload de arquivos. A pasta database possui arquivos de configuração e inicialização do banco de dados.",
    github: "",
    deploy: "",
    technologies: ["Node", "Backend", "JavaScript", "Git"],
  },
  {
    id: 12,
    title: "Grand Theft Auto",
    image: Gta,
    description: "LandingPage do Grand Theft Auto.",
    github: "",
    deploy: "",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    id: 13,
    title: "Netflix Page",
    image: Netflix,
    description: "LandingPage do Netflix.",
    github: "",
    deploy: "",
    technologies: ["Html", "Css", "JavaScript"],
  },
];
