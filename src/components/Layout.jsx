import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

/**
 * Estrutura base de todas as páginas: <header> → <main> → <footer>.
 * O conteúdo da rota ativa é renderizado no <Outlet /> dentro do <main>.
 */
function Layout({ usuarioLogado, onLogout }) {
  return (
    <>
      {/* Skip link: permite a usuários de teclado/leitor de tela pular a navegação. */}
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header usuarioLogado={usuarioLogado} onLogout={onLogout} />

      <main id="conteudo" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

Layout.propTypes = {
  usuarioLogado: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Layout;
