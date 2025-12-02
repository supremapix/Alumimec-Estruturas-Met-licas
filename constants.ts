import { Service, Testimonial, FAQ, Project, VideoData, ModelComparison } from './types';

export const COMPANY_INFO = {
  name: "Alumimec Estruturas Metálicas",
  phone1: "41996315885",
  phone1Display: "(41) 99631-5885",
  phone2Display: "(41) 99722-1079",
  email: "contato@alumimec.com.br",
  address: "R. Dep. Arnaldo Faivro Busato - Afonso Pena, CEP: 83045-000 - Curitiba/PR",
  addressShort: "Afonso Pena, Curitiba/PR",
  hours: "Segunda a Sexta: 8:00 às 17:30",
  facebook: "https://www.facebook.com/61566509445362",
  instagram: "https://www.instagram.com/alumimec/",
  responsible: "Eduardo dos Santos",
  logo: "assets/images/logo-alumimec-alt.jpg"
};

export const CITIES = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", 
  "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", 
  "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", 
  "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", 
  "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", 
  "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const NEIGHBORHOODS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo",
  "Boqueirão de Cima", "Tanguá", "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima",
  "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", "Vila Fanny", "Vila Hauer",
  "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra",
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú (Alto da Glória)",
  "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta", "Bacacheri",
  "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho (Champagnat)", "Boa Vista", "Bom Retiro",
  "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira",
  "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha",
  "Caximba", "Centro", "Centro Cívico", "Cidade Industrial de Curitiba", "Cristo Rei",
  "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange",
  "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena",
  "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho",
  "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida",
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco",
  "São João", "São Lourenço", "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado",
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel",
  "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho",
  "Uberaba de Cima", "Uberaba de Baixo", "São Braz Velho", "Cidade Industrial", "Vila Verde",
  "Vila Barigui", "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho",
  "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro (Uberaba)",
  "Vila Osternack", "Neo Ville no CIC", "Vila Formosa", "Vila Sandra", "Conjunto Caiuá",
  "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi"
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Galpões Industriais",
    description: "Estruturas robustas para indústrias e logística, projetadas para durabilidade e grandes vãos livres.",
    benefits: ["Vãos livres amplos", "Montagem rápida", "Alta durabilidade"],
    image: "/alumimec-curitiba-orcamentos.jpg"
  },
  {
    id: 2,
    title: "Coberturas Metálicas",
    description: "Soluções em coberturas para comércios, quadras esportivas e residências com proteção térmica e acústica.",
    benefits: ["Proteção contra intempéries", "Design moderno", "Materiais certificados"],
    image: "/cobertura-metalica.jpg"
  },
  {
    id: 3,
    title: "Estruturas Residenciais",
    description: "Inovação para sua casa com estruturas metálicas aparentes, pergolados e garagens modernas.",
    benefits: ["Estética contemporânea", "Obra limpa", "Valorização do imóvel"],
    image: "/cobertura-metalica-alumimec.png"
  },
  {
    id: 4,
    title: "Mezaninos Metálicos",
    description: "Amplie sua área útil sem grandes reformas. Ideais para escritórios, estoques e lojas.",
    benefits: ["Otimização de espaço", "Estrutura leve", "Instalação ágil"],
    image: "/mezaninos-metalicos-estruturais.png"
  },
  {
    id: 5,
    title: "Escadas Industriais",
    description: "Escadas retas, caracol ou marinheiro, seguindo rigorosamente as normas de segurança NR-12.",
    benefits: ["Segurança total", "Acabamento premium", "Antiderrapante"],
    image: "/bairro.jpg"
  },
  {
    id: 6,
    title: "Portões Industriais",
    description: "Segurança e automação para entrada de grandes veículos e controle de acesso.",
    benefits: ["Alta resistência", "Automação compatível", "Baixa manutenção"],
    image: "/portao-industrial-novo.jpg"
  }
];

export const GALLERY_IMAGES: Project[] = [
  { id: 1, title: "Cobertura Metálica Industrial", description: "Proteção e durabilidade para grandes áreas.", category: "Industrial", image: "/cobertura-metalica.jpg" },
  { id: 2, title: "Galpões Industriais Metálicos", description: "Estrutura completa entregue no prazo.", category: "Galpões", image: "/alumimec-curitiba-orcamentos.jpg" },
  { id: 3, title: "Mezaninos Metálicos Estruturais", description: "Ampliação de espaço com eficiência.", category: "Mezaninos", image: "/mezaninos-metalicos-estruturais.png" },
  { id: 4, title: "Portões Industriais Modernos", description: "Segurança e automação garantida.", category: "Portões", image: "/portao-industrial-novo.jpg" },
  { id: 5, title: "Portões Metálicos Residenciais", description: "Design e funcionalidade.", category: "Portões", image: "/portoes-metalicos-carmo.jpg" },
  { id: 6, title: "Estruturas em Bairros de Curitiba", description: "Atendimento em toda RMC.", category: "Regional", image: "/bairro.jpg" },
  { id: 7, title: "Coberturas com Isolamento Térmico", description: "Conforto e eficiência energética.", category: "Coberturas", image: "/cobertura-metalica-alumimec.png" },
  { id: 8, title: "Obras Realizadas no Paraná", description: "Projetos em todo o estado.", category: "Portfólio", image: "/alumimec-parana-brasil.png" },
  { id: 9, title: "Portões Industriais de Grande Porte", description: "Soluções para indústrias.", category: "Industrial", image: "/portao-industrial.jpg" },
];

export const VIDEOS: VideoData[] = [
  { id: "v1", title: "Processo de Montagem", videoId: "Zk7W4W0l2yA" },
  { id: "v2", title: "Entrega de Projeto", videoId: "BTYIE29w7Z4" },
  { id: "v3", title: "Projeto Industrial", videoId: "o3nthQB9k7k" }
];

export const FAQs: FAQ[] = [
  { question: "Vocês atendem em toda Curitiba e Região?", answer: "Sim! Atendemos todos os bairros de Curitiba e todas as cidades da Região Metropolitana, incluindo litoral." },
  { question: "Qual o prazo médio de entrega de um galpão?", answer: "O prazo varia conforme o tamanho, mas geralmente entregamos projetos médios entre 30 a 60 dias." },
  { question: "Vocês fornecem ART e projeto de engenharia?", answer: "Sim, todas as nossas obras acompanham ART (Anotação de Responsabilidade Técnica) e seguimos normas da ABNT." },
  { question: "Aceitam quais formas de pagamento?", answer: "Aceitamos cartões (BNDES), financiamento bancário e parcelamento direto mediante análise." },
  { question: "A visita para orçamento tem custo?", answer: "Não, realizamos a visita técnica inicial e o orçamento sem compromisso e sem custo para Curitiba e região próxima." },
  { question: "Trabalham com telha sanduíche?", answer: "Sim, somos especialistas em coberturas termoacústicas com telha sanduíche (EPS ou PIR)." },
  { question: "Fazem reforço estrutural em prédios?", answer: "Sim, executamos reforços estruturais em vigas W para lajes e pilares comprometidos ou para ampliações." },
  { question: "Qual a garantia das estruturas?", answer: "Oferecemos 5 anos de garantia estrutural conforme legislação vigente." },
  { question: "Fazem apenas a mão de obra ou material também?", answer: "Trabalhamos preferencialmente com a empreitada global (material + mão de obra) para garantir a qualidade do aço." },
  { question: "Vocês fabricam portões basculantes industriais?", answer: "Sim, fabricamos e instalamos portões de grandes dimensões, preparados para automação." },
  { question: "Atendem obras residenciais pequenas?", answer: "Sim, fazemos garagens, pergolados e escadas para residências." },
  { question: "Como funciona o licenciamento da obra?", answer: "Auxiliamos com toda a documentação necessária para aprovação na prefeitura e bombeiros." },
  { question: "Qual o tipo de pintura utilizada?", answer: "Utilizamos pintura eletrostática ou epóxi de alta resistência contra corrosão." },
  { question: "Fazem mezaninos para lojas em shoppings?", answer: "Sim, temos larga experiência em obras noturnas e rápidas para shoppings e comércio." },
  { question: "É possível desmontar e remontar o galpão?", answer: "Sim, nossas estruturas são parafusadas, permitindo a desmontagem e remontagem em outro local se necessário." }
];

export const COMPARISON_DATA: ModelComparison[] = [
  { feature: "Durabilidade", modelA: "Média (10-15 anos)", modelB: "Alta (50+ anos)" },
  { feature: "Vão Livre", modelA: "Limitado por pilares", modelB: "Amplo sem pilares centrais" },
  { feature: "Tempo de Obra", modelA: "Lento (Concreto/Alvenaria)", modelB: "Rápido (Pré-fabricado)" },
  { feature: "Resíduos", modelA: "Alto desperdício", modelB: "Obra limpa e sustentável" },
  { feature: "Custo-Benefício", modelA: "Alto custo de manutenção", modelB: "Baixa manutenção" },
  { feature: "Flexibilidade", modelA: "Rígida (difícil alterar)", modelB: "Modular (fácil ampliação)" },
  { feature: "Retorno do Investimento", modelA: "Longo prazo", modelB: "Médio prazo (obra rápida)" },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Carlos Mendes", location: "São José dos Pinhais", text: "A Alumimec entregou nosso barracão antes do prazo. Qualidade impecável da estrutura e equipe muito educada.", rating: 5 },
  { id: 2, name: "Ana Paula", location: "Curitiba - Batel", text: "Fizeram o mezanino da minha loja. Ficou perfeito, muito firme e acabamento de primeira.", rating: 5 },
  { id: 3, name: "Roberto Silva", location: "Colombo", text: "Contratei para cobertura de quadra. Preço justo e serviço técnico de engenharia muito bom.", rating: 5 },
  { id: 4, name: "Construtora Ideal", location: "Pinhais", text: "Parceiros de longa data. Sempre que precisamos de reforço estrutural chamamos o Eduardo.", rating: 5 },
  { id: 5, name: "Marcos Oliveira", location: "Araucária", text: "Excelente atendimento desde o orçamento até a entrega das chaves do galpão.", rating: 5 },
  { id: 6, name: "Júlia Santos", location: "Santa Felicidade", text: "Minha escada metálica ficou linda, design moderno como eu queria.", rating: 5 },
];