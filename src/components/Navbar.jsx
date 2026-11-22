import { startTransition, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './Navbar.module.css';

// Fonte única dos itens de navegação: novas páginas são registradas aqui.
const LINKS_MENU = [
  { para: '/', rotulo: 'Início' },
  { para: '/atividade-3', rotulo: 'Atividade 3' },
  { para: '/paleta-de-cores', rotulo: 'Paleta de Cores' },
  { para: '/sandbox', rotulo: 'SandBox' },
];

/**
 * Menu principal baseado no navbar do Bootstrap.
 *
 * O colapso mobile é controlado por estado do React em vez do JavaScript do
 * Bootstrap, evitando dois sistemas manipulando o mesmo DOM. <NavLink> aplica
 * a classe .active na rota atual, que o Bootstrap já estiliza.
 */
function Navbar({ usuarioLogado, onLogout }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  const alternarMenu = () => setMenuAberto((aberto) => !aberto);
  const fecharMenu = () => setMenuAberto(false);

  const handleSair = () => {
    fecharMenu();
    // Logout e navegação na MESMA transição: o React aplica as duas mudanças juntas.
    // Separadas, a RotaProtegida do /admin veria "sem usuário" antes da troca de rota
    // e mandaria para /login em vez da página inicial.
    startTransition(() => {
      onLogout();
      navigate('/');
    });
  };

  return (
    <nav id="menu" className={`navbar navbar-expand-lg navbar-dark p-0 ${styles.menu}`} aria-label="Menu principal">
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="itensMenu"
        aria-expanded={menuAberto}
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        onClick={alternarMenu}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div id="itensMenu" className={`collapse navbar-collapse ${menuAberto ? 'show' : ''}`}>
        <ul className={`navbar-nav ms-lg-auto ${styles.lista}`}>
          {LINKS_MENU.map(({ para, rotulo }) => (
            <li className="nav-item" key={para}>
              {/* `end` evita que "/" fique ativo em todas as rotas. */}
              <NavLink to={para} end className={`nav-link ${styles.link}`} onClick={fecharMenu}>
                {rotulo}
              </NavLink>
            </li>
          ))}

          {/* Ações de sessão: painel + sair para usuário logado, login para visitante. */}
          {usuarioLogado ? (
            <>
              <li className="nav-item">
                <NavLink to="/admin" className={`nav-link ${styles.link}`} onClick={fecharMenu}>
                  Painel
                </NavLink>
              </li>
              <li className="nav-item">
                <button type="button" className={`btn btn-outline-light btn-sm ${styles.botao}`} onClick={handleSair}>
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <NavLink to="/login" className={`btn btn-dourado btn-sm ${styles.botao}`} onClick={fecharMenu}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  usuarioLogado: PropTypes.shape({
    nome: PropTypes.string.isRequired,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
