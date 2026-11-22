import PropTypes from 'prop-types';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { CREDENCIAL_DEMO } from '../data/usuarios';
import useTituloPagina from '../hooks/useTituloPagina';
import styles from './Login.module.css';

/**
 * Página de login.
 * Fluxo: LoginForm valida os campos → handleAutenticar chama `onLogin` (App) →
 * em caso de sucesso, redireciona para a rota de origem ou para o painel.
 */
function Login({ usuarioLogado = null, onLogin }) {
  useTituloPagina('Login');
  const navigate = useNavigate();
  const location = useLocation();

  // Usuário já autenticado não deve ver o formulário novamente.
  if (usuarioLogado) {
    return <Navigate to="/admin" replace />;
  }

  const handleAutenticar = async (credenciais) => {
    await onLogin(credenciais); // exceções são tratadas e exibidas pelo LoginForm
    const destino = location.state?.origem ?? '/admin';
    navigate(destino, { replace: true });
  };

  return (
    <div className="container py-4 py-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <section className={styles.cartao} aria-labelledby="titulo-login">
            <h1 id="titulo-login" className="h3 text-center mb-1">
              Login
            </h1>
            <p id="login-ajuda" className="text-center text-body-secondary mb-4">
              Acesse a área administrativa do portal.
            </p>

            <LoginForm onSubmit={handleAutenticar} />

            {/* Exibido apenas enquanto a autenticação for mock (sem back-end). */}
            <aside className={styles.demo} aria-label="Credenciais de demonstração">
              <strong>Acesso de demonstração</strong>
              <span>E-mail: <code>{CREDENCIAL_DEMO.email}</code></span>
              <span>Senha: <code>{CREDENCIAL_DEMO.senha}</code></span>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  usuarioLogado: PropTypes.shape({ nome: PropTypes.string.isRequired }),
  onLogin: PropTypes.func.isRequired,
};

export default Login;
