export interface VehiclePlan {
  id: string;
  name: string;
  badge?: string;
  baseMonthly: number;
  fipeMultiplier: number;
  towDistanceKm: number;
  thirdPartyCover: number;
  loanerCarDays: number;
  glassCoverage: boolean;
  trackerIncluded: boolean;
  popular: boolean;
  features: string[];
}

export const PLANS: VehiclePlan[] = [
  {
    id: 'essencial',
    name: 'Plano Essencial',
    baseMonthly: 79.90,
    fipeMultiplier: 0.0018,
    towDistanceKm: 300,
    thirdPartyCover: 30000,
    loanerCarDays: 7,
    glassCoverage: false,
    trackerIncluded: false,
    popular: false,
    features: [
      'Proteção contra Roubo e Furto (100% FIPE)',
      'Colisão e Perda Total',
      'Incêndio por colisão ou curto',
      'Assistência 24h Nacional (Reboque 300km)',
      'Danos a Terceiros até R$ 30.000',
      'Chaveiro e Troca de Pneu',
    ],
  },
  {
    id: 'completo',
    name: 'Plano Completo Mais',
    badge: 'Mais Escolhido',
    baseMonthly: 119.90,
    fipeMultiplier: 0.0022,
    towDistanceKm: 600,
    thirdPartyCover: 50000,
    loanerCarDays: 15,
    glassCoverage: true,
    trackerIncluded: true,
    popular: true,
    features: [
      'Tudo do Essencial +',
      'Proteção contra Fenômenos da Natureza (Granizo/Enchente)',
      'Danos a Terceiros até R$ 50.000',
      'Reboque ampliado de 600km',
      'Proteção Integral de Vidros, Faróis e Lanternas',
      'Rastreador e Bloqueador GPS sem custo adicional',
      'Carro Reserva por até 15 dias',
      'Acesso ao Clube Aliar de Benefícios',
    ],
  },
  {
    id: 'premium',
    name: 'Plano Premium Total',
    badge: 'Máxima Proteção',
    baseMonthly: 169.90,
    fipeMultiplier: 0.0026,
    towDistanceKm: 1000,
    thirdPartyCover: 100000,
    loanerCarDays: 30,
    glassCoverage: true,
    trackerIncluded: true,
    popular: false,
    features: [
      'Tudo do Completo +',
      'Reboque ilimitado ou 1.000km em viagens',
      'Danos a Terceiros até R$ 100.000',
      'Carro Reserva por até 30 dias',
      'Hospedagem emergencial para passageiros',
      'Rastreamento em tempo real via App mobile',
      'Desconto estendido em oficinas credenciadas Aliar',
      'Isenção de taxa de adesão prioritária',
    ],
  },
];

export interface BenefitPartner {
  category: 'Combustível' | 'Farmácia' | 'Manutenção' | 'Educação' | 'Lazer';
  name: string;
  discount: string;
  description: string;
}

export const BENEFIT_PARTNERS: BenefitPartner[] = [
  { category: 'Combustível', name: 'Rede Postos Vale', discount: 'Até R$ 0,25/L de desconto', description: 'Cashback e desconto na bomba para associados Aliar' },
  { category: 'Farmácia', name: 'Droga Raia & Drogasil', discount: 'Até 45% OFF', description: 'Descontos em medicamentos genéricos e produtos de higiene' },
  { category: 'Manutenção', name: 'Centrais de Pneus e Troca de Óleo', discount: '15% a 25% OFF', description: 'Mão de obra e peças com garantia estendida' },
  { category: 'Educação', name: 'Faculdades e Escolas Técnicas EAD', discount: 'Bolsas até 60%', description: 'Cursos de graduação e pós-graduação reconhecidos' },
  { category: 'Lazer', name: 'Cinemas & Parques Conveniados', discount: 'Meia-entrada', description: 'Ingressos promocionais para toda a família do associado' },
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'O que é a Aliar Proteção Veicular?',
    a: 'A Aliar é uma associação mutualista de proteção patrimonial legalmente constituída, com sede em Minas Gerais (Vale do Aço). Através do mutualismo, todos os associados dividem de forma justa e transparente os custos dos prejuízos ocorridos no mês, garantindo proteção completa sem fins lucrativos e sem as burocracias das seguradoras tradicionais.',
  },
  {
    q: 'Preciso ter o nome limpo no SPC/Serasa para me associar?',
    a: 'Não! Na Aliar não realizamos consulta a órgãos de proteção ao crédito (SPC, Serasa ou score de crédito). Acreditamos no direito de todo proprietário proteger o seu patrimônio com dignidade.',
  },
  {
    q: 'Existe análise de perfil por idade, CEP ou condutor?',
    a: 'Não há perfil do condutor. Qualquer pessoa habilitada pode conduzir seu veículo protegido pela Aliar e ter total cobertura em caso de evento, seja você motorista de aplicativo, jovem recém-habilitado ou família.',
  },
  {
    q: 'Como funciona o acionamento da Assistência 24 Horas?',
    a: 'Nossa central de assistência 24 horas funciona 365 dias por ano com ligação gratuita (0800) e WhatsApp rápido. Basta informar sua placa e localização para despacharmos reboque, chaveiro, troca de pneu ou socorro mecânico em qualquer estrada ou cidade do Brasil.',
  },
  {
    q: 'Qual o prazo para indenização em caso de roubo, furto ou perda total?',
    a: 'Cumpridos os requisitos e documentações do regulamento interno da associação, as indenizações integrais da Aliar são pagas com base na Tabela FIPE vigente na data da ocorrência, com agilidade e total respaldo jurídico.',
  },
];
