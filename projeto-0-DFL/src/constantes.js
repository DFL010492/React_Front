export const jsQuestões = {
  perguntas: [
    {
      questão:
        "Qual das alternativas a seguir descreve corretamente o React?",
      escolhas: [
        "O React é um framework de back-end JavaScript de código fechado, usado para gerenciar bancos de dados.",
        "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
        "O React é uma ferramenta de design gráfico usada para criar logotipos e animações.",
        "O React é um ambiente de desenvolvimento integrado (IDE) usado para criar aplicativos de desktop.",
      ],
      type: "MCQs",
      resposta: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
      explicacao: "O React é uma biblioteca front-end JavaScript de código aberto que permite criar interfaces de usuário de forma eficiente e flexível em aplicações web."
    },
    {
      questão: "Como muda a cor de um elemento em html?",
      escolhas: [
        "background-color",
        "font-color",
        "shadow-color",
        "color",
      ],
      type: "MCQs",
      resposta: "color",
      explicacao: "A propriedade 'color' em CSS é usada para alterar a cor do texto em um elemento HTML."
    },
    {
      questão: "O React foi criado por qual empresa?",
      escolhas: [
        "Amazon", 
        "Apple", 
        "Facebook", 
        "Google"
      ],
      type: "MCQs",
      resposta: "Facebook",
      explicacao: "O React foi desenvolvido pelo Facebook e lançado em 2013 como uma ferramenta para construir interfaces de usuário."
    },
    {
      questão: "O que faz a função render em um componente de classe React?",
      escolhas: [
        "Atualiza o estado do componente", 
        "Cria uma nova instância do componente", 
        "Retorna o conteúdo JSX que será exibido na tela", 
        "Adiciona estilos ao componente"
      ],
      type: "MCQs",
      resposta: "Retorna o conteúdo JSX que será exibido na tela",
      explicacao: "A função render de um componente de classe React retorna o JSX que representa o conteúdo a ser exibido no DOM."
    },
    {
      questão: "Qual a linguagem de programação usada pelo React?",
      escolhas: [
        "Python",
        "JavaScript",
        "C++",
        "TypeScript",
      ],
      type: "MCQs",
      resposta: "JavaScript",
      explicacao: "O React é escrito em JavaScript, uma linguagem de programação amplamente usada para desenvolvimento web."
    },
    {
      questão: "O React é uma biblioteca JavaScript usada para construir interfaces de usuário em aplicações web?",
      escolhas: [
        "Certo",
        "Errado",
      ],
      type: "MCQs",
      resposta: "Certo",
      explicacao: "O React é uma biblioteca desenvolvida pelo Facebook que facilita a criação de interfaces de usuário, especialmente para aplicações web, permitindo a construção de componentes reutilizáveis e eficientes."
    },
    {
      questão: "No React, componentes funcionais não podem usar o hook useState para gerenciar estados?",
      escolhas: [
        "Certo",
        "Errado",
      ],
      type: "MCQs",
      resposta: "Errado",
      explicacao: "Com o React 16.8 e a introdução dos hooks, componentes funcionais agora podem usar useState para gerenciar estado, o que antes era possível apenas em componentes de classe."
    },
  ],
};

export const resultadoInicialState = {
    score: 0,
    respostasCertas: 0,
    respostasErradas: 0,
};

export const pessoa = {
  usuarios: [{
    usuario: "Daniel",
    senha: "123456",
  },{
    usuario: "Carlos",
    senha: "987654"
  }],
};