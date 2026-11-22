/**
 * Serviço de autenticação (implementação mock, sem back-end).
 *
 * `autenticar` mantém a assinatura assíncrona de uma chamada HTTP real e simula
 * sua latência. Ao integrar com a API, basta trocar a implementação interna:
 * os consumidores já tratam a Promise e os erros.
 *
 * A sessão é persistida no sessionStorage: sobrevive ao recarregamento da página
 * e é descartada ao fechar a aba.
 */
import { CREDENCIAL_DEMO } from '../data/usuarios';

const CHAVE_SESSAO = 'portalFilarmonica:sessao';
const LATENCIA_SIMULADA_MS = 600;

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {{ email: string, senha: string }} credenciais
 * @returns {Promise<{ nome: string, email: string }>} usuário autenticado
 * @throws {Error} quando e-mail ou senha não conferem
 */
export async function autenticar({ email, senha }) {
  await esperar(LATENCIA_SIMULADA_MS);

  const emailNormalizado = email.trim().toLowerCase();
  const credencialConfere =
    emailNormalizado === CREDENCIAL_DEMO.email && senha === CREDENCIAL_DEMO.senha;

  if (!credencialConfere) {
    throw new Error('E-mail ou senha incorretos.');
  }

  return { nome: CREDENCIAL_DEMO.nome, email: emailNormalizado };
}

// Acesso ao storage protegido: navegadores com storage bloqueado lançam exceção.
export function lerSessao() {
  try {
    const bruto = sessionStorage.getItem(CHAVE_SESSAO);
    return bruto ? JSON.parse(bruto) : null;
  } catch {
    return null;
  }
}

export function salvarSessao(usuario) {
  try {
    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario));
  } catch {
    // Sem storage disponível a sessão segue válida apenas em memória.
  }
}

export function encerrarSessao() {
  try {
    sessionStorage.removeItem(CHAVE_SESSAO);
  } catch {
    // Storage indisponível: não há sessão persistida a remover.
  }
}
