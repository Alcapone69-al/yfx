/**
 * Projetos reais da YFX.
 * Regra: só factos verificados. Funcionalidades entregues ≠ resultados medidos.
 * Quando ainda não há resultados medidos, dizemo-lo.
 */

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export type Shot = {
  src: string; // caminho em /public (sem base)
  alt: string;
  caption?: string;
  kind?: "desktop" | "mobile";
};

export type Project = {
  slug: string;
  name: string;
  /** Nome curto para títulos gigantes */
  short: string;
  category: string;
  sector: string;
  year: string;
  status: string;
  url: string;
  urlLabel: string;
  external: boolean;
  tone: string; // cor da marca do cliente, usada com parcimónia
  lede: string;
  context: string[];
  challenge: string[];
  solution: string[];
  approach: string[];
  features: string[];
  outcomes: string[];
  note?: string;
  cover: Shot;
  coverMobile?: Shot;
  gallery: Shot[];
};

export const PROJECTS: Project[] = [
  {
    slug: "da-ka",
    name: "DA-KA Consultoria",
    short: "DA-KA",
    category: "Website institucional",
    sector: "Importação da China para Moçambique",
    year: "2026",
    status: "Online",
    url: "https://dakaconsultoria.com",
    urlLabel: "Abrir dakaconsultoria.com",
    external: true,
    tone: "#d4163c",
    lede: "Um website de várias páginas em que o pedido de cotação está logo na página inicial: o cliente envia o link ou a foto do produto e recebe o preço, o frete e a comissão em separado.",
    context: [
      "A DA KATEMBE Consultoria, Serviços & Empreendimentos é uma empresa de Maputo que compra produtos na China e os entrega em Moçambique.",
      "O nome conta a sua origem: D de Djalma, A de Alquino e KA de KaTembe.",
    ],
    challenge: [
      "O pedido de cotação é o centro do negócio, por isso tinha de estar na página inicial e ser fácil de usar no telemóvel.",
      "O cliente pediu um site dividido em páginas, muito limpo, com movimento, e que não parecesse genérico nem feito por IA.",
      "Era preciso um domínio .com e e-mail corporativo sem custos fixos de alojamento.",
    ],
    solution: [
      "Um formulário de pedido em duas formas, com link do produto ou com fotografia, que abre o WhatsApp com o pedido já escrito para a DA-KA.",
      "O processo explicado em quatro passos, do pedido à entrega em Moçambique.",
      "Páginas dedicadas para a empresa, os clientes, as perguntas frequentes e os contactos, com botão de WhatsApp sempre visível.",
    ],
    approach: [
      "Tipografia forte em maiúsculas e o vermelho da marca usado só onde há ação.",
      "Site estático, rápido de carregar, alojado gratuitamente no GitHub Pages com o domínio dakaconsultoria.com.",
      "E-mail corporativo configurado no domínio próprio.",
    ],
    features: [
      "Pedido de cotação por link ou fotografia",
      "Processo em quatro passos",
      "Páginas Empresa, Clientes, Perguntas e Contactos",
      "Domínio .com com e-mail corporativo",
      "Botão de WhatsApp flutuante",
    ],
    outcomes: [
      "O website foi lançado em outubro de 2026. Ainda não há resultados de tráfego ou de pedidos medidos.",
    ],
    cover: {
      src: "work/daka/hero.webp",
      alt: "Página inicial do website DA-KA: Da China para Moçambique",
    },
    coverMobile: {
      src: "work/daka/m-hero.webp",
      alt: "Página inicial da DA-KA no telemóvel",
      kind: "mobile",
    },
    gallery: [
      {
        src: "work/daka/pedido.webp",
        alt: "Formulário de pedido de cotação da DA-KA",
        caption: "O pedido de cotação, com link ou com foto, já na página inicial.",
      },
      {
        src: "work/daka/m-pedido.webp",
        alt: "Pedido de cotação da DA-KA no telemóvel",
        caption: "No telemóvel o pedido abre o WhatsApp já preenchido.",
        kind: "mobile",
      },
      {
        src: "work/daka/como.webp",
        alt: "Secção Do pedido à sua porta, com quatro passos",
        caption: "O processo em quatro passos.",
      },
      {
        src: "work/daka/empresa.webp",
        alt: "Página Empresa da DA-KA",
        caption: "Página da empresa.",
      },
      {
        src: "work/daka/faq.webp",
        alt: "Página de perguntas frequentes da DA-KA",
        caption: "Perguntas frequentes.",
      },
    ],
  },
  {
    slug: "giquira-group",
    name: "Giquira Group",
    short: "Giquira",
    category: "Website institucional",
    sector: "Procurement e logística internacional",
    year: "2026",
    status: "Online",
    url: "https://alcapone69-al.github.io/giquiragroup-site/",
    urlLabel: "Abrir o website",
    external: true,
    tone: "#3f8f3a",
    lede: "Presença online para uma empresa que compra na origem e entrega em Moçambique, contada com fotografias reais do CEO nas fábricas parceiras.",
    context: [
      "O Giquira Group encontra fornecedores na China, negoceia, acompanha a produção e trata do transporte até Moçambique.",
      "O CEO, Danilo, passa grande parte do tempo na China, junto das fábricas e dos parceiros.",
    ],
    challenge: [
      "Mostrar que a empresa vai mesmo às fábricas, e não compra por catálogo.",
      "Substituir imagens genéricas por provas reais da operação.",
      "Preparar o site para aparecer no Google.",
    ],
    solution: [
      "Todas as imagens de banco foram retiradas. O site usa apenas as fotografias reais do CEO com parceiros, em fábricas e no carregamento de contentores.",
      "O percurso de uma encomenda explicado passo a passo, da fábrica à entrega.",
      "Páginas de Procurement, Produtos, Sobre nós e Contactos, com logótipos dos parceiros.",
      "Ficheiro robots.txt e dados estruturados para os motores de busca.",
    ],
    approach: [
      "Verde da marca e tipografia grotesca, sem enfeites, para deixar as fotografias falar.",
      "Site estático gerado a partir de um único script, fácil de atualizar.",
    ],
    features: [
      "Fotografia real da operação na China",
      "Percurso da encomenda em seis passos",
      "Páginas de serviços, produtos e empresa",
      "Logótipos dos parceiros",
      "Preparado para o Google",
    ],
    outcomes: ["O website está online. Ainda não há resultados de tráfego medidos."],
    cover: {
      src: "work/giquira/hero.webp",
      alt: "Página inicial do Giquira Group: Compramos na origem. Entregamos em Moçambique.",
    },
    coverMobile: {
      src: "work/giquira/m-hero.webp",
      alt: "Página inicial do Giquira Group no telemóvel",
      kind: "mobile",
    },
    gallery: [
      {
        src: "work/giquira/procurement.webp",
        alt: "Página de procurement do Giquira Group",
        caption: "Procurement, com fotografia real nas fábricas.",
      },
      {
        src: "work/giquira/como.webp",
        alt: "Percurso da encomenda em passos",
        caption: "Do pedido à porta, passo a passo.",
      },
      {
        src: "work/giquira/m-sobre.webp",
        alt: "Página Sobre nós no telemóvel",
        caption: "Sobre nós, no telemóvel.",
        kind: "mobile",
      },
      {
        src: "work/giquira/sobre.webp",
        alt: "Página Sobre nós do Giquira Group",
        caption: "A história da empresa.",
      },
      {
        src: "work/giquira/produtos.webp",
        alt: "Página de produtos do Giquira Group",
        caption: "Produtos escolhidos na origem.",
      },
    ],
  },
  {
    slug: "mentor-de-milhoes",
    name: "Mentor de Milhões",
    short: "Mentor",
    category: "Landing page",
    sector: "Comunidade de mentoria online, para maiores de 18",
    year: "2026",
    status: "Online, com atualizações contínuas",
    url: "https://alcapone69-al.github.io/mentor-de-milhoes/",
    urlLabel: "Abrir a landing page",
    external: true,
    tone: "#d9a93d",
    lede: "Uma página de conversão para a comunidade de Saylor JR, com vídeo, as duas formas de entrar na comunidade e ligação direta para o Telegram, o WhatsApp e o Instagram.",
    context: [
      "Saylor JR gere comunidades online sobre jogos de apostas, com conteúdo para maiores de 18 anos.",
      "A página é usada em campanhas nas redes sociais e é atualizada sempre que o cliente precisa.",
    ],
    challenge: [
      "Explicar depressa as duas formas de entrar na comunidade e levar a pessoa ao canal certo.",
      "Comunicar de forma responsável: a página avisa que não há garantias de lucro e que é para maiores de 18.",
    ],
    solution: [
      "Vídeo de abertura, a escolha entre as duas comunidades e uma explicação de como funcionam.",
      "Secção sobre quem é o Saylor e chamadas diretas para o Telegram, o WhatsApp e o Instagram.",
      "Avisos de risco e de idade visíveis no topo da página.",
    ],
    approach: [
      "Fundo escuro, serifa clássica e acento dourado, num registo diferente dos sites institucionais.",
      "Página estática no GitHub Pages, rápida de alterar quando o cliente pede novas secções.",
    ],
    features: [
      "Vídeo em destaque",
      "Duas comunidades lado a lado",
      "Ligações para Telegram, WhatsApp e Instagram",
      "Avisos de risco e de idade",
      "Atualizações a pedido",
    ],
    outcomes: ["A página está online e em uso. Não temos resultados de conversão medidos."],
    cover: { src: "work/mentor/hero.webp", alt: "Topo da landing page Mentor de Milhões" },
    coverMobile: {
      src: "work/mentor/m-hero.webp",
      alt: "Landing page Mentor de Milhões no telemóvel",
      kind: "mobile",
    },
    gallery: [
      {
        src: "work/mentor/s1.webp",
        alt: "Secção Escolhe o caminho certo para ti",
        caption: "As duas comunidades lado a lado.",
      },
      {
        src: "work/mentor/m-s1.webp",
        alt: "Secção das comunidades no telemóvel",
        caption: "A mesma escolha no telemóvel.",
        kind: "mobile",
      },
      {
        src: "work/mentor/s2.webp",
        alt: "Secção Como funcionam as comunidades",
        caption: "Como funcionam as comunidades.",
      },
      {
        src: "work/mentor/s3.webp",
        alt: "Secção Quem é o Saylor e chamada final",
        caption: "Quem é o Saylor e os canais de contacto.",
      },
    ],
  },
  {
    slug: "armazem-erp",
    name: "Armazém ERP",
    short: "ERP",
    category: "Sistema de gestão",
    sector: "Armazenista de mercearia em Nampula e Maputo",
    year: "2026",
    status: "Protótipo funcional",
    url: "demos/armazem-erp/",
    urlLabel: "Experimentar a demonstração",
    external: false,
    tone: "#2f5bd3",
    lede: "Um sistema de gestão para um armazenista de mercearia que está a expandir de Nampula para Maputo: vendas, stock por armazém, contabilidade e faturas num só painel.",
    context: [
      "O cliente vende produtos de mercearia por grosso em Nampula e está a abrir operação em Maputo.",
      "Pediu um sistema de contabilidade, vendas e gestão de stock. Este protótipo é a base para o desenvolvimento final.",
    ],
    challenge: [
      "Gerir dois armazéns, em duas cidades, com o stock de cada um sempre à vista.",
      "Dar a cada pessoa acesso só ao que precisa: vendas, armazém ou finanças.",
    ],
    solution: [
      "Painel com vendas do dia, receita da semana, stock baixo, saldo de caixa e lotes a vencer, com troca entre Nampula e Maputo.",
      "Ponto de venda com pesquisa e leitura de código de barras, stock por armazém e transferências entre armazéns.",
      "Contabilidade com demonstração de resultados, contas a pagar e a receber, faturas e recibos.",
      "Acessos por função: administrador, vendas, armazém e finanças.",
    ],
    approach: [
      "Interface densa mas calma, pensada para ser usada o dia inteiro no computador do armazém.",
      "Funciona no navegador e pode ser instalado como aplicação. Na demonstração, os dados ficam guardados só no navegador de quem a usa.",
    ],
    features: [
      "Painel por armazém",
      "Ponto de venda com código de barras",
      "Stock, lotes e transferências",
      "Contabilidade, faturas e recibos",
      "Clientes e fornecedores",
      "Acessos por função",
    ],
    outcomes: ["É um protótipo funcional, ainda não está em produção. Não há resultados medidos."],
    note: "Para experimentar, entre com o utilizador admin e a palavra-passe admin123. Os dados são fictícios e ficam só no seu navegador. A demonstração está otimizada para computador.",
    cover: {
      src: "work/erp/hero.webp",
      alt: "Painel do Armazém ERP com vendas, stock baixo e saldo de caixa",
    },
    gallery: [
      {
        src: "work/erp/vendas.webp",
        alt: "Ponto de venda do Armazém ERP",
        caption: "Ponto de venda com pesquisa e código de barras.",
      },
      {
        src: "work/erp/stock.webp",
        alt: "Stock por armazém no Armazém ERP",
        caption: "Stock de Nampula e Maputo lado a lado.",
      },
      {
        src: "work/erp/contab.webp",
        alt: "Contabilidade do Armazém ERP",
        caption: "Demonstração de resultados e contas.",
      },
      {
        src: "work/erp/faturas.webp",
        alt: "Lista de faturas e recibos",
        caption: "Faturas e recibos.",
      },
      {
        src: "work/erp/login.webp",
        alt: "Ecrã de entrada do Armazém ERP",
        caption: "Entrada com acessos por função.",
      },
    ],
  },
];

export const projectHref = (p: Project) => (p.external ? p.url : asset(p.url));
export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
export const nextProject = (slug: string) => {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length]!;
};
