import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  PADRAO_EMAIL,
  TAMANHO_MINIMO_SENHA,
  validarLogin,
  semErros,
} from '../utils/validacoes';

const VALORES_INICIAIS = { email: '', senha: '' };

/**
 * Formulário de login com validação client-side.
 *
 * As restrições ficam declaradas nos inputs (required, type, pattern, minLength) e
 * são reaplicadas em JS por validarLogin(). `noValidate` desativa apenas os balões
 * nativos do navegador, para que o feedback seja o mesmo em qualquer browser.
 *
 * Os erros aparecem a partir do primeiro blur do campo (não enquanto o usuário
 * ainda está digitando pela primeira vez) e são revalidados a cada alteração.
 * A autenticação é delegada a `onSubmit`; o componente cuida só da UI.
 */
function LoginForm({ onSubmit }) {
  const [valores, setValores] = useState(VALORES_INICIAIS);
  const [erros, setErros] = useState({});
  const [camposVisitados, setCamposVisitados] = useState({});
  const [erroAutenticacao, setErroAutenticacao] = useState('');
  const [enviando, setEnviando] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const novosValores = { ...valores, [name]: value };
    setValores(novosValores);
    setErroAutenticacao('');

    // Campo já visitado: revalida a cada tecla para o erro sumir assim que corrigido.
    if (camposVisitados[name]) {
      setErros(validarLogin(novosValores));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setCamposVisitados((visitados) => ({ ...visitados, [name]: true }));
    setErros(validarLogin(valores));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errosEncontrados = validarLogin(valores);
    setErros(errosEncontrados);
    setCamposVisitados({ email: true, senha: true });

    if (!semErros(errosEncontrados)) {
      // Move o foco para o primeiro campo inválido (acessibilidade).
      const primeiroCampo = Object.keys(errosEncontrados)[0];
      document.getElementById(`login-${primeiroCampo}`)?.focus();
      return;
    }

    setEnviando(true);
    try {
      await onSubmit({ email: valores.email, senha: valores.senha });
    } catch (erro) {
      setErroAutenticacao(erro.message);
      setValores((atuais) => ({ ...atuais, senha: '' }));
    } finally {
      setEnviando(false);
    }
  };

  // Estado visual do campo: neutro até ser visitado, depois válido ou inválido.
  const classeCampo = (campo) => {
    if (!camposVisitados[campo]) return 'form-control';
    return `form-control ${erros[campo] ? 'is-invalid' : 'is-valid'}`;
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {erroAutenticacao && (
        <div className="alert alert-danger py-2" role="alert">
          {erroAutenticacao}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="login-email" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          className={classeCampo('email')}
          placeholder="nome@dominio.com"
          autoComplete="email"
          required
          pattern={PADRAO_EMAIL}
          title="Digite um e-mail no formato nome@dominio.com"
          value={valores.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(erros.email && camposVisitados.email)}
          aria-describedby="login-email-erro"
        />
        <div id="login-email-erro" className="invalid-feedback">
          {erros.email}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="login-senha" className="form-label">
          Senha
        </label>
        <input
          type="password"
          id="login-senha"
          name="senha"
          className={classeCampo('senha')}
          placeholder="Digite sua senha"
          autoComplete="current-password"
          required
          minLength={TAMANHO_MINIMO_SENHA}
          value={valores.senha}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(erros.senha && camposVisitados.senha)}
          aria-describedby="login-senha-erro"
        />
        <div id="login-senha-erro" className="invalid-feedback">
          {erros.senha}
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100" disabled={enviando}>
        {enviando ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
            Entrando...
          </>
        ) : (
          'Entrar'
        )}
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
