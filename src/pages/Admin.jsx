import { useState } from 'react';
import PropTypes from 'prop-types';

import BuscaUsuarios from '../components/BuscaUsuarios';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import { usuariosIniciais } from '../data/usuarios';
import useTituloPagina from '../hooks/useTituloPagina';
import styles from './Admin.module.css';

// Estado inicial do formulário de usuário (fechado).
const FORMULARIO_FECHADO = { aberto: false, usuario: null };

/**
 * Painel administrativo de usuários (rota protegida).
 *
 * Concentra o estado da listagem; tabela, busca e formulário são componentes de
 * apresentação que recebem dados e callbacks. Enquanto não há API, a lista parte
 * dos dados seed e as alterações valem apenas durante a sessão.
 */
function Admin({ usuarioLogado = null }) {
  useTituloPagina('Painel Administrativo');

  const [usuarios, setUsuarios] = useState(usuariosIniciais);
  const [termoBusca, setTermoBusca] = useState('');
  const [formulario, setFormulario] = useState(FORMULARIO_FECHADO);
  const [mensagem, setMensagem] = useState('');

  // Filtro case-insensitive por nome, e-mail ou status.
  const termo = termoBusca.trim().toLowerCase();
  const usuariosFiltrados = termo
    ? usuarios.filter(({ nome, email, status }) =>
        [nome, email, status].some((campo) => campo.toLowerCase().includes(termo)),
      )
    : usuarios;

  // E-mails de outros usuários (na edição, o próprio e-mail continua permitido).
  const emailsEmUso = usuarios
    .filter(({ id }) => id !== formulario.usuario?.id)
    .map(({ email }) => email.toLowerCase());

  const abrirNovo = () => {
    setMensagem('');
    setFormulario({ aberto: true, usuario: null });
  };

  const handleEditar = (usuario) => {
    setMensagem('');
    setFormulario({ aberto: true, usuario });
  };

  const fecharFormulario = () => setFormulario(FORMULARIO_FECHADO);

  const handleSalvar = (dados) => {
    if (dados.id) {
      setUsuarios((lista) => lista.map((u) => (u.id === dados.id ? dados : u)));
      setMensagem(`Usuário "${dados.nome}" atualizado com sucesso.`);
    } else {
      // Gera o próximo id localmente; com API, o id virá do servidor.
      const proximoId = usuarios.reduce((maior, { id }) => Math.max(maior, id), 0) + 1;
      setUsuarios((lista) => [...lista, { ...dados, id: proximoId }]);
      setMensagem(`Usuário "${dados.nome}" cadastrado com o ID ${proximoId}.`);
    }
    fecharFormulario();
  };

  const handleExcluir = (usuario) => {
    // Confirmação explícita antes de uma ação destrutiva.
    const confirmou = window.confirm(`Deseja realmente excluir o usuário "${usuario.nome}"?`);
    if (!confirmou) return;

    setUsuarios((lista) => lista.filter(({ id }) => id !== usuario.id));
    if (formulario.usuario?.id === usuario.id) fecharFormulario();
    setMensagem(`Usuário "${usuario.nome}" excluído.`);
  };

  return (
    <div className="container py-4 py-md-5">
      <div className={styles.topo}>
        <div>
          <h1 className="titulo-secao mb-2">Painel de Usuários</h1>
          <p className="text-body-secondary mb-0">
            Olá, <strong>{usuarioLogado?.nome ?? 'administrador'}</strong>. Gerencie os usuários do portal.
          </p>
        </div>
        <button type="button" className="btn btn-success" onClick={abrirNovo}>
          + Novo usuário
        </button>
      </div>

      {mensagem && (
        <div className="alert alert-success alert-dismissible" role="status">
          {mensagem}
          <button type="button" className="btn-close" aria-label="Fechar aviso" onClick={() => setMensagem('')} />
        </div>
      )}

      {formulario.aberto && (
        <UserForm
          key={formulario.usuario?.id ?? 'novo'}
          usuarioEmEdicao={formulario.usuario}
          emailsEmUso={emailsEmUso}
          onSalvar={handleSalvar}
          onCancelar={fecharFormulario}
        />
      )}

      <section aria-labelledby="titulo-tabela">
        <h2 id="titulo-tabela" className="visually-hidden">
          Lista de usuários
        </h2>
        <div className={styles.busca}>
          <BuscaUsuarios termo={termoBusca} onBuscar={setTermoBusca} />
        </div>
        <UserTable usuarios={usuariosFiltrados} onEditar={handleEditar} onExcluir={handleExcluir} />
      </section>
    </div>
  );
}

// Opcional: no instante do logout o elemento ainda é criado (antes do redirect
// da RotaProtegida), então a prop pode chegar como null.
Admin.propTypes = {
  usuarioLogado: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default Admin;
