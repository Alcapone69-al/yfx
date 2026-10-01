export const WHATSAPP_NUMBER = "258861742006";
export const WHATSAPP_LABEL = "+258 86 174 2006";
export const INSTAGRAM_URL = "https://instagram.com/yfx_258";
export const INSTAGRAM_LABEL = "@yfx_258";
export const LOCATION = "Maputo, Moçambique";
/** Origem pública do site (para URLs absolutas de Open Graph). Mudar quando houver domínio próprio. */
export const SITE_ORIGIN = "https://alcapone69-al.github.io";

export const whatsapp = (text = "Olá YFX! Gostaria de saber mais sobre as vossas soluções.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_URL = whatsapp();
export const WHATSAPP_PROJECT_URL = whatsapp(
  "Olá YFX! Quero começar um projeto. Podemos marcar o diagnóstico gratuito?",
);

export type Service = {
  id: string;
  title: string;
  short: string;
  text: string;
  items: string[];
  example?: string;
};

export const SERVICES: Service[] = [
  {
    id: "websites",
    title: "Websites e lojas online",
    short: "Websites",
    text: "Sites institucionais rápidos e lojas online prontas a vender, pensados para quem visita pelo telemóvel.",
    items: [
      "Websites institucionais",
      "Landing pages para campanhas",
      "Lojas online",
      "Domínio e e-mail corporativo",
    ],
    example: "da-ka",
  },
  {
    id: "sistemas",
    title: "Sistemas de gestão e reservas",
    short: "Sistemas",
    text: "Plataformas à medida para gerir clientes, marcações, stock e reservas. Tudo num só lugar, sem folhas de Excel dispersas.",
    items: ["Vendas e stock", "Faturas e recibos", "Marcações e reservas", "Acessos por função"],
    example: "armazem-erp",
  },
  {
    id: "automacao",
    title: "Agentes de IA e automação",
    short: "Automação",
    text: "Assistentes no WhatsApp que respondem, qualificam e enviam cotações automaticamente, 24 horas por dia.",
    items: [
      "Agentes de IA no WhatsApp",
      "Cotações automáticas em PDF",
      "Respostas fora de horas",
      "Painéis de controlo",
    ],
  },
  {
    id: "design",
    title: "Design e identidade visual",
    short: "Design",
    text: "Logótipo, cores e materiais que dão à sua empresa uma imagem profissional e consistente.",
    items: [
      "Logótipo e identidade",
      "Materiais para redes sociais",
      "Apresentações e documentos",
      "Interfaces de produto",
    ],
  },
];

/** É mesmo uma sequência — por isso numerada. */
export const PROCESS = [
  {
    title: "Diagnóstico",
    text: "Conversamos sobre o seu negócio e identificamos onde se perde tempo e dinheiro. É gratuito.",
  },
  {
    title: "Proposta",
    text: "Apresentamos a solução recomendada, prazos e valores, sem jargão técnico.",
  },
  {
    title: "Construção",
    text: "Construímos, testamos consigo e formamos a sua equipa para usar tudo com confiança.",
  },
  {
    title: "Acompanhamento",
    text: "Plano de manutenção mensal: atualizações, melhorias e apoio sempre que precisar.",
  },
];

export const COMMITMENTS = [
  {
    title: "Diagnóstico inicial gratuito",
    text: "Analisamos o seu negócio antes de propor seja o que for.",
  },
  {
    title: "Resposta no mesmo dia útil",
    text: "Escreva no WhatsApp em dia útil e respondemos no mesmo dia ou no seguinte.",
  },
  {
    title: "Feito em Maputo, em português",
    text: "Suporte na sua língua, no seu fuso horário, com quem conhece o mercado.",
  },
  {
    title: "Sem fidelização",
    text: "O plano de manutenção mensal pode ser cancelado quando quiser.",
  },
];

export const SECTORS = [
  "Clínicas",
  "Restaurantes",
  "Imobiliárias",
  "Construção",
  "Comércio",
  "Escolas",
  "Hotéis",
  "Escritórios",
  "Importação",
  "Logística",
];

export const NAV = [
  { to: "/portfolio", label: "Trabalho" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Estúdio" },
  { to: "/contacto", label: "Contacto" },
] as const;

export const PRINCIPLES = [
  {
    title: "Abordagem consultiva",
    text: "Primeiro percebemos o negócio, depois propomos. Se não precisa de um sistema caro, dizemos-lhe.",
  },
  {
    title: "Tudo no mesmo parceiro",
    text: "Website, sistema, design e automação feitos pelo mesmo parceiro, para que tudo comunique entre si.",
  },
  {
    title: "Foco em automação e IA",
    text: "Tiramos o trabalho repetitivo das mãos da sua equipa para libertar tempo para vender.",
  },
  {
    title: "Proximidade local",
    text: "Estamos em Maputo. Falamos a sua língua, conhecemos o mercado e respondemos rápido.",
  },
];

/** Exemplo do site anterior: um pedido de cotação, com e sem automação. */
export const AUTOMATION_EXAMPLE = {
  before: [
    "O cliente liga ou escreve a pedir preços.",
    "Alguém procura a tabela de preços e confirma stock.",
    "Escreve a cotação à mão no Word e converte em PDF.",
    "Se for fora de horas, o cliente espera até amanhã.",
  ],
  after: [
    "O agente responde no WhatsApp a qualquer hora.",
    "Faz as perguntas certas e calcula o valor.",
    "Envia a cotação em PDF automaticamente.",
    "A sua equipa só entra para fechar o negócio.",
  ],
};

export const CONTACT_TOPICS = [
  { label: "Um website", text: "Olá YFX! Preciso de um website para o meu negócio." },
  {
    label: "Um sistema de gestão",
    text: "Olá YFX! Quero um sistema de gestão (vendas, stock ou reservas).",
  },
  { label: "Automação no WhatsApp", text: "Olá YFX! Quero automatizar o atendimento no WhatsApp." },
  { label: "Design e identidade", text: "Olá YFX! Preciso de logótipo e identidade visual." },
  {
    label: "Ainda não sei",
    text: "Olá YFX! Ainda não sei o que preciso. Podemos marcar o diagnóstico gratuito?",
  },
];
