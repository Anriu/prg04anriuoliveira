import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import logo from '../assets/images/logo.png';
import styles from './Header.module.css';

/**
 * Cabeçalho global: marca (logotipo + nome) e menu principal.
 */
function Header({ usuarioLogado, onLogout }) {
  return (
    <header className={styles.cabecalho}>
      <div className={`container ${styles.barra}`}>
        <Link to="/" className={styles.marca} aria-label="Portal da Filarmônica — página inicial">
          <img src={logo} alt="" className={styles.logo} width="40" height="52" />
          <span className={styles.nomeSite}>
            Portal da <strong>Filarmônica</strong>
          </span>
        </Link>

        <Navbar usuarioLogado={usuarioLogado} onLogout={onLogout} />
      </div>
    </header>
  );
}

Header.propTypes = {
  usuarioLogado: PropTypes.shape({
    nome: PropTypes.string.isRequired,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Header;
