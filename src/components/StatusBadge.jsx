import PropTypes from 'prop-types';

import { STATUS_USUARIO } from '../data/usuarios';

// Variante de cor do badge para cada status de usuário.
const CLASSE_POR_STATUS = {
  [STATUS_USUARIO.ATIVO]: 'text-bg-success',
  [STATUS_USUARIO.PENDENTE]: 'text-bg-warning',
  [STATUS_USUARIO.INATIVO]: 'text-bg-secondary',
};

function StatusBadge({ status }) {
  return <span className={`badge rounded-pill ${CLASSE_POR_STATUS[status]}`}>{status}</span>;
}

StatusBadge.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUS_USUARIO)).isRequired,
};

export default StatusBadge;
