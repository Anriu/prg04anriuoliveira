import { Link } from 'react-router-dom';

import useTituloPagina from '../hooks/useTituloPagina';

/** Fallback para rotas inexistentes (path="*"). */
function PaginaNaoEncontrada() {
  useTituloPagina('Página não encontrada');

  return (
    <div className="container py-5 text-center">
      <section className="bloco" aria-labelledby="titulo-404">
        <p className="display-1 fw-bold text-body-tertiary mb-0" aria-hidden="true">404</p>
        <h1 id="titulo-404" className="h3">Página não encontrada</h1>
        <p className="text-body-secondary">O endereço acessado não existe ou foi movido.</p>
        <Link to="/" className="btn btn-primary">
          Voltar para a página inicial
        </Link>
      </section>
    </div>
  );
}

export default PaginaNaoEncontrada;
