/**
 * Regras de validação client-side compartilhadas pelos formulários.
 *
 * Espelham as restrições declaradas nos inputs (required, type, pattern, minLength)
 * para gerar mensagens de erro consistentes entre navegadores. Não substituem a
 * validação no servidor.
 */

// Fonte única do formato de e-mail: usada no atributo `pattern` e na regex abaixo.
export const PADRAO_EMAIL = '[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}';
const REGEX_EMAIL = new RegExp(`^${PADRAO_EMAIL}$`);

export const TAMANHO_MINIMO_SENHA = 6;
export const TAMANHO_MINIMO_NOME = 3;

export const emailEhValido = (email) => REGEX_EMAIL.test(email.trim());

/**
 * Valida o formulário de login.
 * @param {{ email: string, senha: string }} dados
 * @returns {{ email?: string, senha?: string }} objeto vazio quando tudo está correto
 */
export function validarLogin({ email, senha }) {
  const erros = {};

  if (!email.trim()) {
    erros.email = 'Informe o seu e-mail.';
  } else if (!emailEhValido(email)) {
    erros.email = 'Formato de e-mail inválido. Exemplo: nome@dominio.com';
  }

  if (!senha) {
    erros.senha = 'Informe a sua senha.';
  } else if (senha.length < TAMANHO_MINIMO_SENHA) {
    erros.senha = `A senha deve ter pelo menos ${TAMANHO_MINIMO_SENHA} caracteres.`;
  }

  return erros;
}

/**
 * Valida o cadastro/edição de usuário do painel administrativo.
 * `emailsEmUso` evita e-mails duplicados (regra de negócio simples de cadastro).
 */
export function validarUsuario({ nome, email }, emailsEmUso = []) {
  const erros = {};

  if (nome.trim().length < TAMANHO_MINIMO_NOME) {
    erros.nome = `O nome deve ter pelo menos ${TAMANHO_MINIMO_NOME} caracteres.`;
  }

  if (!email.trim()) {
    erros.email = 'Informe o e-mail do usuário.';
  } else if (!emailEhValido(email)) {
    erros.email = 'Formato de e-mail inválido.';
  } else if (emailsEmUso.includes(email.trim().toLowerCase())) {
    erros.email = 'Este e-mail já está cadastrado.';
  }

  return erros;
}

// Atalho legível para "o objeto de erros está vazio?".
export const semErros = (erros) => Object.keys(erros).length === 0;
