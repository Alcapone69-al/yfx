const img = (file: string) => `${import.meta.env.BASE_URL}portfolio/${file}`;

export type Projeto = {
  slug: string;
  cliente: string;
  tipo: string;
  setor: string;
  resumo: string;
  entregas: string[];
  url: string;
  urlLabel: string;
  desktop: string;
  mobile?: string;
  nota?: string;
  acento: string;
};

export const PROJETOS: Projeto[] = [
  {
    slug: "daka",
    cliente: "DA-KA Consultoria",
    tipo: "Website institucional",
    setor: "Importação · China → Moçambique",
    resumo:
      "Website multi-página com pedido de cotação logo na página inicial: o cliente envia o link ou a foto do produto e recebe preço, frete e comissão separados.",
    entregas: ["Pedido de cotação", "Domínio .com e e-mail corporativo", "Perguntas frequentes", "Botão de WhatsApp"],
    url: "https://dakaconsultoria.com",
    urlLabel: "dakaconsultoria.com",
    desktop: img("daka-desktop.webp"),
    mobile: img("daka-mobile.webp"),
    acento: "#c8102e",
  },
  {
    slug: "giquira",
    cliente: "Giquira Group",
    tipo: "Website institucional",
    setor: "Procurement e logística internacional",
    resumo:
      "Presença online para uma empresa que compra na origem e entrega em Moçambique, com fotografias reais do CEO nas fábricas parceiras e o percurso de cada encomenda.",
    entregas: ["Páginas de serviços e produtos", "Fotografia real da operação", "Pedido de cotação", "Preparado para o Google"],
    url: "https://alcapone69-al.github.io/giquiragroup-site/",
    urlLabel: "Ver website",
    desktop: img("giquira-desktop.webp"),
    mobile: img("giquira-mobile.webp"),
    acento: "#2e7d32",
  },
  {
    slug: "mentor",
    cliente: "Mentor de Milhões",
    tipo: "Landing page",
    setor: "Comunidade de mentoria online (+18)",
    resumo:
      "Página de conversão com vídeo, prova social da comunidade e inscrição direta, construída para campanhas nas redes sociais e atualizada sempre que o cliente precisa.",
    entregas: ["Vídeo em destaque", "Secção de resultados", "Formulário de inscrição", "Atualizações contínuas"],
    url: "https://alcapone69-al.github.io/mentor-de-milhoes/",
    urlLabel: "Ver landing page",
    desktop: img("mentor-desktop.webp"),
    mobile: img("mentor-mobile.webp"),
    acento: "#d4a43a",
  },
  {
    slug: "erp",
    cliente: "Armazém ERP",
    tipo: "Sistema de gestão",
    setor: "Armazenista de mercearia · Nampula e Maputo",
    resumo:
      "Sistema de gestão desenvolvido para um armazenista de mercearia que está a expandir de Nampula para Maputo: vendas, stock por armazém, transferências, contabilidade, faturas e recibos num só painel, com acessos por função.",
    entregas: ["Vendas e faturação", "Stock e lotes a vencer", "Dois armazéns", "Contabilidade e caixa", "Acessos por função"],
    url: `${import.meta.env.BASE_URL}demos/armazem-erp/`,
    urlLabel: "Experimentar a demonstração",
    desktop: img("erp-desktop.webp"),
    acento: "#1b3a8c",
    nota: "Entre com o utilizador admin e a palavra-passe admin123. Os dados são de demonstração.",
  },
];
