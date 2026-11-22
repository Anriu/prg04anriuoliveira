import PropTypes from 'prop-types';

import StatusBadge from './StatusBadge';
import { STATUS_USUARIO } from '../data/usuarios';
import styles from './UserTable.module.css';

/**
 * Tabela de usuários do painel administrativo.
 *
 * Componente puramente de apresentação: não altera dados, apenas notifica o pai
 * via `onEditar`/`onExcluir`. Hierarquia visual das ações: "Editar" é a ação
 * primária (preenchida) e "Excluir", por ser destrutiva, usa contorno vermelho.
 */
function UserTable({ usuarios, onEditar, onExcluir }) {
  return (
    <div className={`table-responsive ${styles.envoltorio}`}>
      <table className="table table-striped table-hover align-middle mb-0">
        <caption className={styles.legenda}>
          {usuarios.length === 1
            ? '1 usuário encontrado'
            : `${usuarios.length} usuários encontrados`}
        </caption>

        <thead className={styles.cabecalho}>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Status</th>
            <th scope="col" className="text-end">Ações</th>
          </tr>
        </thead>

        <tbody>
          {/* Estado vazio: evita uma tabela sem linhas quando a busca não encontra nada. */}
          {usuarios.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-body-secondary py-4">
                Nenhum usuário corresponde à busca.
              </td>
            </tr>
          ) : (
            usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <th scope="row">{usuario.id}</th>
                <td>{usuario.nome}</td>
                <td className={styles.email}>{usuario.email}</td>
                <td>
                  <StatusBadge status={usuario.status} />
                </td>
                <td>
                  <div className={styles.acoes}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => onEditar(usuario)}
                      aria-label={`Editar ${usuario.nome}`}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => onExcluir(usuario)}
                      aria-label={`Excluir ${usuario.nome}`}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

UserTable.propTypes = {
  usuarios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      status: PropTypes.oneOf(Object.values(STATUS_USUARIO)).isRequired,
    }),
  ).isRequired,
  onEditar: PropTypes.func.isRequired,
  onExcluir: PropTypes.func.isRequired,
};

export default UserTable;
