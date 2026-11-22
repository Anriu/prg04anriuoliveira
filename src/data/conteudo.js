/**
 * Conteúdo estático das páginas, mantido fora dos componentes para que textos
 * e listas possam ser alterados sem tocar no JSX.
 */

// Instrumentos de uma banda filarmônica, na ordem usual por naipes.
export const instrumentos = [
  'Flautim',
  'Flauta Transversal',
  'Clarinete',
  'Requinta',
  'Saxofone Alto',
  'Saxofone Tenor',
  'Saxofone Barítono',
  'Trompa Alto (Sax Horn)',
  'Trompete',
  'Trombone',
  'Bombardino',
  'Tuba',
  'Sousafone',
  'Caixa',
  'Bumbo',
  'Prato',
];

// Módulos planejados do sistema, exibidos em cards na página inicial.
export const modulosSistema = [
  { id: 'alunos', titulo: 'Gestão de alunos', descricao: 'Cadastro de alunos da escola de música, turmas e evolução nos estudos.' },
  { id: 'monitores', titulo: 'Gestão de monitores', descricao: 'Organização dos monitores responsáveis por naipes e aulas.' },
  { id: 'instrumentos', titulo: 'Gestão de instrumentos', descricao: 'Controle do patrimônio, empréstimos e manutenção dos instrumentos.' },
  { id: 'materiais', titulo: 'Gestão de materiais', descricao: 'Fardamentos, estantes, partituras físicas e demais materiais.' },
  { id: 'repertorio', titulo: 'Gestão de repertório', descricao: 'Acervo de partituras, dobrados, marchas e arranjos da banda.' },
  { id: 'apresentacoes', titulo: 'Gestão de apresentações', descricao: 'Agenda de retretas, desfiles, festas cívicas e religiosas.' },
  { id: 'historico', titulo: 'Histórico da banda', descricao: 'Memória da filarmônica: fotos, registros e acontecimentos marcantes.' },
];

/**
 * Paleta de cores exibida na página de identidade visual. `classe` referencia uma
 * regra de AmostraCor.module.css ligada ao token de src/styles/index.css; o `hex`
 * é apenas o rótulo exibido. `textoEscuro` garante contraste em cores claras.
 */
export const gruposPaleta = [
  {
    id: 'azuis',
    titulo: 'Azuis — cor principal',
    cores: [
      { classe: 'azul1', hex: '#1C3353', papel: 'Principal' },
      { classe: 'azul2', hex: '#569BFC' },
      { classe: 'azul3', hex: '#4882D4' },
      { classe: 'azul4', hex: '#3A69AB' },
      { classe: 'azul5', hex: '#2C5082' },
    ],
  },
  {
    id: 'verdes',
    titulo: 'Verdes — cor complementar',
    cores: [
      { classe: 'verde1', hex: '#39A04C' },
      { classe: 'verde2', hex: '#2D7D3C', papel: 'Secundária' },
      { classe: 'verde3', hex: '#1E5428' },
      { classe: 'verde4', hex: '#59F776', textoEscuro: true },
      { classe: 'verde5', hex: '#4ACF63', textoEscuro: true },
    ],
  },
  {
    id: 'destaque',
    titulo: 'Cor de destaque',
    cores: [{ classe: 'vermelho', hex: '#CE393F', papel: 'Destaque' }],
  },
  {
    id: 'neutras',
    titulo: 'Cores neutras',
    cores: [
      { classe: 'cinza1', hex: '#D9D9D9', textoEscuro: true },
      { classe: 'cinza2', hex: '#DBDBDB', textoEscuro: true },
      { classe: 'cinza3', hex: '#B3B3B3', textoEscuro: true },
      { classe: 'cinza4', hex: '#8A8A8A' },
      { classe: 'cinza5', hex: '#616161' },
    ],
  },
  {
    id: 'instrumentos',
    titulo: 'Cores relacionadas aos instrumentos',
    cores: [
      { classe: 'instrumento1', hex: '#F79228', textoEscuro: true },
      { classe: 'instrumento2', hex: '#DD7B2A', textoEscuro: true },
      { classe: 'instrumento3', hex: '#E8DFD4', textoEscuro: true },
      { classe: 'instrumento4', hex: '#373841', papel: 'Texto' },
      { classe: 'instrumento5', hex: '#AE5328' },
      { classe: 'instrumento6', hex: '#ECC869', textoEscuro: true },
      { classe: 'instrumento7', hex: '#F8B674', textoEscuro: true },
      { classe: 'instrumento8', hex: '#5A261E' },
      { classe: 'instrumento9', hex: '#B78358', textoEscuro: true },
      { classe: 'instrumento10', hex: '#000000' },
    ],
  },
];
