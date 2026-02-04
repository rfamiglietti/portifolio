import { 
  SiDjango, SiPython, SiPostgresql, SiBootstrap, SiReact, SiTailwindcss, SiArduino, SiCplusplus
} from 'react-icons/si';

// CORREÇÃO: O nome deve ser igual ao do seu repositório no GitHub
const BASE_PATH = "/portifolio";

export const projectsData = [
  {
    id: 1,
    title: "Senai School Manager",
    cover: `${BASE_PATH}/prints/senaimenu.jpg`, 
    shortDescription: "Sistema de gestão escolar completo. Desenvolvido para resolver a complexidade de turmas, notas e faltas, oferecendo painéis exclusivos para alunos, professores e coordenação.",
    fullDescription: `
      Este projeto foi desenvolvido para resolver a complexidade da gestão acadêmica no SENAI. 
      O objetivo era criar um sistema centralizado onde Secretaria, Coordenação, Professores e Alunos tivessem visões personalizadas e seguras.

      Utilizando a robustez do Django no backend e a flexibilidade do Supabase (PostgreSQL), implementei um sistema de controle de acesso (RBAC) rigoroso.
    `,
    techs: [
      { icon: SiDjango, name: "Django", color: "text-green-600" },
      { icon: SiPython, name: "Python", color: "text-blue-500" },
      { icon: SiPostgresql, name: "Supabase", color: "text-blue-300" },
      { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
    ],
    features: [
      "Painéis exclusivos para Aluno, Professor e Secretaria",
      "Lançamento de Notas e Frequência em tempo real",
      "Visualização de Boletim e Histórico Escolar",
      "Gestão Financeira para Secretaria"
    ],
    images: [
      `${BASE_PATH}/prints/senaimenu.jpg`,
      `${BASE_PATH}/prints/alunoinicio.png`,
      `${BASE_PATH}/prints/alunoboletim.png`,
      `${BASE_PATH}/prints/professoraulas.png`,
      `${BASE_PATH}/prints/professordiario.png`,
      `${BASE_PATH}/prints/secretariapainel.png`,
      `${BASE_PATH}/prints/secretariaalunos.png`,
      `${BASE_PATH}/prints/cordenacaovisao.png`,
      `${BASE_PATH}/prints/secretariafinanceiro.png`
    ],
    github: "https://github.com/rfamiglietti/SENAI-School-Manager",
    demo: null, 
  },
  {
    id: 2,
    title: "Portfolio Pessoal",
    cover: `${BASE_PATH}/prints/imgperfil2.jpeg`, 
    shortDescription: "Meu cartão de visitas digital. Um projeto focado em UX/UI moderna, utilizando React e Framer Motion para criar uma experiência imersiva e responsiva.",
    fullDescription: `
      Meu cartão de visitas digital e vitrine de projetos. O foco foi criar uma experiência imersiva com tema 'VS Code' e 'Cyberpunk'.
      
      A arquitetura foi pensada para ser escalável, separando dados da interface e utilizando componentes reutilizáveis.
    `,
    techs: [
      { icon: SiReact, name: "React", color: "text-blue-400" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
    ],
    features: ["Design Responsivo", "Galeria Interativa", "Formulário AJAX"],
    images: [], 
    github: "https://github.com/rfamiglietti/portfolio",
    demo: "https://rfamiglietti.github.io/portfolio/",
  },
  {
    id: 3,
    title: "Estacionamento Inteligente",
    cover: null, 
    shortDescription: "Protótipo IoT desenvolvido com Arduino e C++ para automação de controle de acesso, utilizando sensores ultrassônicos e servomotores.",
    fullDescription: `
      Projeto de automação utilizando microcontroladores para gerenciar um estacionamento. 
      O sistema utiliza sensores ultrassônicos para detectar a presença do veículo e servomotores para a cancela.
    `,
    techs: [
      { icon: SiArduino, name: "Arduino", color: "text-teal-600" },
      { icon: SiCplusplus, name: "C++", color: "text-blue-600" },
    ],
    features: ["Detecção automática", "Controle de servo", "Lógica C++"],
    images: [], 
    github: null,
    demo: null,
  }
];