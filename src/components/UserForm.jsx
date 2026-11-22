import { useState } from 'react';
import PropTypes from 'prop-types';

import { STATUS_USUARIO } from '../data/usuarios';
import { PADRAO_EMAIL, TAMANHO_MINIMO_NOME, validarUsuario, semErros } from '../utils/validacoes';
import styles from './UserForm.module.css';

const USUARIO_VAZIO = { nome: '', email: '', status: STATUS_USUARIO.ATIVO };

/**
 * Formulário de cadastro e edição de usuários.
 *
 * Com `usuarioEmEdicao` entra em modo edição e pré-preenche os campos; sem ele,
 * cadastra um novo registro. O pai deve renderizá-lo com `key` por usuário, para
 * que trocar o registro em edição reinicie o estado interno.
 */
function UserForm({ usuarioEmEdicao = null, emailsEmUso, onSalvar, onCancelar }) {
  const editando = usuarioEmEdicao !== null;
  const [valores, setValores] = useState(() =>
    editando
      ? { nome: usuarioEmEdicao.nome, email: usuarioEmEdicao.email, status: usuarioEmEdicao.status }
      : USUARIO_VAZIO,
  );
  const [erros, setErros] = useState({});
  const [tentouSalvar, setTentouSalvar] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const novosValores = { ...valores, [name]: value };
    setValores(novosValores);
    if (tentouSalvar) setErros(validarUsuario(novosValores, emailsEmUso));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errosEncontrados = validarUsuario(valores, emailsEmUso);
    setErros(errosEncontrados);
    setTentouSalvar(true);

    if (semErros(errosEncontrados)) {
      onSalvar({
        ...usuarioEmEdicao, // preserva o id no modo edição
        nome: valores.nome.trim(),
        email: valores.email.trim().toLowerCase(),
        status: valores.status,
      });
    }
  };

  const classeCampo = (campo) =>
    `form-control ${tentouSalvar ? (erros[campo] ? 'is-invalid' : 'is-valid') : ''}`;

  const titulo = editando ? `Editar usuário #${usuarioEmEdicao.id}` : 'Novo usuário';

  return (
    <section className={`card ${styles.painel}`} aria-labelledby="titulo-form-usuario">
      <div className="card-body">
        <h2 id="titulo-form-usuario" className="h5 card-title">
          {titulo}
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="usuario-nome" className="form-label">
                Nome
              </label>
              <input
                id="usuario-nome"
                name="nome"
                type="text"
                className={classeCampo('nome')}
                required
                minLength={TAMANHO_MINIMO_NOME}
                autoComplete="off"
                value={valores.nome}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{erros.nome}</div>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="usuario-email" className="form-label">
                E-mail
              </label>
              <input
                id="usuario-email"
                name="email"
                type="email"
                className={classeCampo('email')}
                required
                pattern={PADRAO_EMAIL}
                autoComplete="off"
                value={valores.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">{erros.email}</div>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="usuario-status" className="form-label">
                Status
              </label>
              <select
                id="usuario-status"
                name="status"
                className="form-select"
                value={valores.status}
                onChange={handleChange}
              >
                {Object.values(STATUS_USUARIO).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.botoes}>
            <button type="button" className="btn btn-outline-secondary" onClick={onCancelar}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-success">
              {editando ? 'Salvar alterações' : 'Cadastrar usuário'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

UserForm.propTypes = {
  usuarioEmEdicao: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.values(STATUS_USUARIO)).isRequired,
  }),
  emailsEmUso: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSalvar: PropTypes.func.isRequired,
  onCancelar: PropTypes.func.isRequired,
};

export default UserForm;
