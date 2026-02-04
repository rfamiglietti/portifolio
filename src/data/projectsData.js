import { 
  SiDjango, 
  SiPython, 
  SiPostgresql, 
  SiBootstrap, 
  SiReact, 
  SiTailwindcss, 
  SiArduino,
  SiCplusplus
} from 'react-icons/si';

export const projectsData = [
  {
    id: 1,
    title: "Senai School Manager",
    shortDescription: "Sistema completo de gestão escolar com Django e Supabase.",
    fullDescription: `
      Este projeto foi desenvolvido para resolver a complexidade da gestão acadêmica no SENAI. 
      O objetivo era criar um sistema centralizado onde Secretaria, Coordenação, Professores e Alunos tivessem visões personalizadas e seguras.

      Utilizando a robustez do Django no backend e a flexibilidade do Supabase (PostgreSQL), implementei um sistema de controle de acesso (RBAC) rigoroso, garantindo que cada usuário veja apenas o que lhe é permitido.
      
      Principais Desafios Superados:
      1. Modelagem do Banco de Dados para suportar relações complexas (Turmas, Professores, Alunos).
      2. Geração dinâmica de boletins e diários de classe.
      3. Interface intuitiva para diferentes perfis de usuário.
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
      "Gestão Financeira para Secretaria",
      "Visão de Desempenho para Coordenação"
    ],
    // Mapeamento exato dos arquivos da sua pasta public/prints
    images: [
      "/prints/senaimenu.jpg",           // Capa
      "/prints/alunoinicio.png",         // Visão do Aluno
      "/prints/alunoboletim.png",        // Boletim
      "/prints/professoraulas.png",      // Visão do Professor
      "/prints/professordiario.png",     // Diário de Classe
      "/prints/secretariapainel.png",    // Painel ADM
      "/prints/secretariaalunos.png",    // Lista de Alunos
      "/prints/cordenacaovisao.png",     // Visão Coordenação
      "/prints/secretariafinanceiro.png" // Financeiro
    ],
    github: "https://github.com/DEVMarlosGomes/SENAI-School-Manager",
    demo: null, 
  },

  {
    id: 2,
    title: "Portfolio Pessoal",
    shortDescription: "Site responsivo criado com React, Tailwind e Framer Motion.",
    fullDescription: `
      Meu cartão de visitas digital e vitrine de projetos. O foco foi criar uma experiência imersiva com tema 'VS Code' e 'Cyberpunk', garantindo alta performance e animações fluidas.
      
      A arquitetura foi pensada para ser escalável, separando dados da interface e utilizando componentes reutilizáveis. O sistema de contato utiliza AJAX para envio sem refresh.
    `,
    techs: [
      { icon: SiReact, name: "React", color: "text-blue-400" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
    ],
    features: [
      "Design Responsivo e Temático", 
      "Galeria de Projetos Interativa", 
      "Formulário de Contato via AJAX",
      "Animações com Framer Motion"
    ],
    images: [], // Adicione prints do seu portfólio aqui depois se quiser
    github: "https://github.com/rfamiglietti/portfolio",
    demo: "https://rfamiglietti.github.io/portfolio/",
  },

  {
    id: 3,
    title: "Sistema de Estacionamento Inteligente",
    shortDescription: "Protótipo IoT com Arduino para automação de cancelas e sensores.",
    fullDescription: `
      Projeto de automação utilizando microcontroladores para gerenciar um estacionamento. 
      
      O sistema utiliza sensores ultrassônicos para detectar a presença do veículo, servomotores para controlar a cancela e LEDs indicativos de status. A lógica foi implementada em C++ focando em eficiência de processamento no hardware limitado.
    `,
    techs: [
      { icon: SiArduino, name: "Arduino", color: "text-teal-600" },
      { icon: SiCplusplus, name: "C++", color: "text-blue-600" },
    ],
    features: [
      "Detecção automática de veículos",
      "Controle de servo motor (cancela)",
      "Indicadores visuais (LEDs)",
      "Lógica de sensores em tempo real"
    ],
    images: [], // Se tiver fotos do Arduino, coloque na pasta prints e adicione aqui
    github: null, // Adicione o link se tiver
    demo: null,
  }
];