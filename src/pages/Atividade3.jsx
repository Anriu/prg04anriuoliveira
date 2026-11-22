import { Link } from 'react-router-dom';

import ImagemInstrumento from '../components/ImagemInstrumento';
import { instrumentos } from '../data/conteudo';
import useTituloPagina from '../hooks/useTituloPagina';

/**
 * Página de instrumentos: lista os instrumentos de uma banda filarmônica e exibe
 * uma imagem que varia conforme a largura da tela.
 */
function Atividade3() {
  useTituloPagina('Lista de Instrumentos');

  return (
    <div className="container py-4 py-md-5">
      <section className="bloco" aria-labelledby="titulo-atividade3">
        <h1 id="titulo-atividade3" className="titulo-secao">
          Instrumentos de uma Banda Filarmônica
        </h1>

        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-6">
            {/* Lista ordenada: a sequência segue a disposição usual por naipes. */}
            <ol className="list-group list-group-numbered">
              {instrumentos.map((instrumento) => (
                <li key={instrumento} className="list-group-item">
                  {instrumento}
                </li>
              ))}
            </ol>
          </div>

          <div className="col-12 col-md-6">
            <ImagemInstrumento />
            <p className="text-center text-body-secondary small mt-2">
              Redimensione a janela: a imagem troca entre clarinete, trompete e tuba.
            </p>
          </div>
        </div>

        <Link to="/" className="btn btn-outline-primary mt-4">
          ← Voltar para a página inicial
        </Link>
      </section>
    </div>
  );
}

export default Atividade3;
