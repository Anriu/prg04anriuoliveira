import PropTypes from 'prop-types';

/**
 * Campo de busca controlado: o termo pertence ao estado do componente pai,
 * que decide como filtrar a listagem.
 */
function BuscaUsuarios({ termo, onBuscar }) {
  return (
    <div role="search">
      <label htmlFor="busca-usuarios" className="form-label visually-hidden">
        Buscar usuários
      </label>
      <input
        id="busca-usuarios"
        type="search"
        className="form-control"
        placeholder="Buscar por nome, e-mail ou status..."
        value={termo}
        onChange={(event) => onBuscar(event.target.value)}
      />
    </div>
  );
}

BuscaUsuarios.propTypes = {
  termo: PropTypes.string.isRequired,
  onBuscar: PropTypes.func.isRequired,
};

export default BuscaUsuarios;
