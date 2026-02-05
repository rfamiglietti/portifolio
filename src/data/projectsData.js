import { 
  SiDjango, SiPython, SiPostgresql, SiBootstrap, SiReact, SiTailwindcss, SiArduino, SiCplusplus, SiFigma, SiNotion
} from 'react-icons/si';

const BASE_PATH = "/portifolio";

export const projectsData = [
  {
    id: 1,
    title: "SENAI School Manager",
    cover: `${BASE_PATH}/prints/senaimenu.jpg`,
    shortDescription: "Plataforma centralizada para gestão escolar. Soluciona a fragmentação de dados unificando matrículas, notas e relatórios em um ambiente seguro e intuitivo.",
    fullDescription: `
      🚩 **A Problemática**
      Muitas escolas ainda dependem de soluções fragmentadas e planilhas que não se comunicam. Isso gera duplicação de dados, erros frequentes e lentidão na tomada de decisão.
      
      💡 **A Solução**
      O SENAI School Manager centraliza todas as informações acadêmicas e administrativas. Desenvolvi uma arquitetura baseada em **Django** e **Django REST Framework** para garantir segurança e escalabilidade.
      
      🧠 **Diferenciais Técnicos:**
      O sistema utiliza bibliotecas avançadas como *django-crispy-forms* para formulários, *reportlab* e *openpyxl* para geração de relatórios (PDF/Excel) e *django-import-export* para manipulação de dados em massa.
      
      🚀 **Impacto:**
      O projeto demonstra a capacidade de traduzir problemas reais em soluções digitais, cobrindo todo o ciclo de vida do software, desde a prototipagem no Figma até a implementação de uma API robusta.
    `,
    techs: [
      { icon: SiDjango, name: "Django", color: "text-green-600" },
      { icon: SiPython, name: "Python", color: "text-blue-500" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-300" },
      { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
    ],
    features: [
      "Dashboards personalizados (Aluno, Prof., Adm)",
      "Relatórios dinâmicos (PDF e Excel)",
      "API REST para integração",
      "Gestão completa de Notas e Frequência",
      "Controle de Matrículas e Turmas"
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
    // LINKS NOVOS
    github: "https://github.com/DEVMarlosGomes/SENAI-School-Manager",
    docs: "https://bird-toothpaste-81f.notion.site/Documenta-o-Sistema-de-Gest-o-Escolar-Avan-ado-SENAI-School-Manager-2a595238c1de808c8d64d80f480810dc",
    figma: "https://www.figma.com/design/dwgi1BfnxjwinRnYUWbphL/Gest%C3%A3o-Escolar---Prot%C3%B3tipo?t=GzcPZeOp8QGEunwR-1",
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
    docs: null,
    figma: null,
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
    docs: null,
    figma: null,
    demo: null,
  }
];