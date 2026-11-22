/**
 * Componente raiz: concentra o estado de autenticação e a tabela de rotas.
 *
 * A sessão fica neste nível porque é lida por várias áreas da aplicação (menu,
 * login e painel). Os componentes filhos não alteram o estado diretamente:
 * recebem os handlers de login/logout e os acionam quando necessário.
 */
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import RotaProtegida from './components/RotaProtegida';

import Home from './pages/Home';
import Atividade3 from './pages/Atividade3';
import PaletaCores from './pages/PaletaCores';
import SandBox from './pages/SandBox';
import Login from './pages/Login';
import Admin from './pages/Admin';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';

import { autenticar, lerSessao, salvarSessao, encerrarSessao } from './services/authService';

function App() {
  // Inicialização lazy: o storage é lido apenas na montagem, não a cada render.
  const [usuarioLogado, setUsuarioLogado] = useState(() => lerSessao());

  /**
   * Autentica e abre a sessão. Em caso de falha a exceção é propagada para que
   * o formulário exiba a mensagem ao usuário.
   */
  const handleLogin = async (credenciais) => {
    const usuario = await autenticar(credenciais);
    salvarSessao(usuario);
    setUsuarioLogado(usuario);
    return usuario;
  };

  const handleLogout = () => {
    encerrarSessao();
    setUsuarioLogado(null);
  };

  return (
    <Routes>
      {/* Rota de layout: cabeçalho e rodapé compartilhados; cada página entra no <Outlet />. */}
      <Route element={<Layout usuarioLogado={usuarioLogado} onLogout={handleLogout} />}>
        <Route index element={<Home />} />
        <Route path="atividade-3" element={<Atividade3 />} />
        <Route path="paleta-de-cores" element={<PaletaCores />} />
        <Route path="sandbox" element={<SandBox />} />
        <Route
          path="login"
          element={<Login usuarioLogado={usuarioLogado} onLogin={handleLogin} />}
        />
        <Route
          path="admin"
          element={
            <RotaProtegida estaAutenticado={Boolean(usuarioLogado)}>
              <Admin usuarioLogado={usuarioLogado} />
            </RotaProtegida>
          }
        />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;
