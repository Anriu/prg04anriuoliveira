import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Guarda de rota para áreas autenticadas.
 * Sem sessão, redireciona para /login preservando a rota de origem em `state`,
 * para que o usuário volte a ela após autenticar.
 */
function RotaProtegida({ estaAutenticado, children }) {
  const location = useLocation();

  if (!estaAutenticado) {
    return <Navigate to="/login" replace state={{ origem: location.pathname }} />;
  }

  return children;
}

RotaProtegida.propTypes = {
  estaAutenticado: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default RotaProtegida;
