/**
 * Dados iniciais (seed) do painel administrativo.
 * Enquanto não há integração com a API, a listagem parte destes registros e as
 * alterações feitas no painel valem apenas durante a sessão.
 */
export const STATUS_USUARIO = Object.freeze({
  ATIVO: 'Ativo',
  PENDENTE: 'Pendente',
  INATIVO: 'Inativo',
});

export const usuariosIniciais = [
  { id: 1, nome: 'Jonatas Bastos', email: 'jonatas.cloude@ai.com', status: STATUS_USUARIO.ATIVO },
  { id: 2, nome: 'Nayelen Menezes', email: 'vaicorinthians@timao.com', status: STATUS_USUARIO.ATIVO },
  { id: 3, nome: 'Jullia Maria', email: 'jubs.baexinha@pix.com', status: STATUS_USUARIO.PENDENTE },
  { id: 4, nome: 'Evandro Lopes', email: 'linuxmelhorquewindows@linux.com', status: STATUS_USUARIO.INATIVO },
  { id: 5, nome: 'Davi Santos', email: 'monosamira@lolzinho.com', status: STATUS_USUARIO.ATIVO },
  { id: 6, nome: 'Maria Clara Souza', email: 'mariaclara.sax@filarmonica.com', status: STATUS_USUARIO.PENDENTE },
];

/**
 * Credencial do ambiente de demonstração, usada pelo authService mock.
 * É exibida na tela de login; não deve existir em um ambiente com back-end real.
 */
export const CREDENCIAL_DEMO = Object.freeze({
  nome: 'Administrador',
  email: 'admin@filarmonica.com',
  senha: 'filarmonica123',
});
