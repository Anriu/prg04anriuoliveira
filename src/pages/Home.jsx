import { Link } from 'react-router-dom';

import ImagemInstrumento from '../components/ImagemInstrumento';
import ModuloCard from '../components/ModuloCard';
import { modulosSistema } from '../data/conteudo';
import useTituloPagina from '../hooks/useTituloPagina';
import styles from './Home.module.css';

/**
 * Página inicial: apresentação do projeto, módulos do sistema e conteúdo
 * complementar. Cabeçalho, navegação e rodapé vêm do Layout.
 */
function Home() {
  useTituloPagina('Início');

  return (
    <div className="container py-4 py-md-5">
      {/* Apresentação */}
      <section className={`row align-items-center g-4 g-lg-5 ${styles.apresentacao}`} aria-labelledby="titulo-home">
        <div className="col-12 col-md-7">
          <p className={styles.chamada}>Bem-vindo! Nasce aqui o nosso projeto.</p>
          <h1 id="titulo-home" className="display-5 fw-bold">
            Portal da Filarmônica
          </h1>
          <p className="lead">
            Um sistema para auxiliar na gestão completa de bandas filarmônicas,
            centralizando informações sobre alunos, músicos, monitores, instrumentos,
            fardamentos, repertório, apresentações e demais recursos da instituição.
          </p>
          <p>
            Além das funcionalidades administrativas, o portal preserva a memória e a
            trajetória da filarmônica: histórico, apresentações realizadas, repertórios
            executados e outros acontecimentos relevantes ao longo de sua existência.
          </p>

          <div className={styles.acoes}>
            <Link to="/login" className="btn btn-primary btn-lg">
              Acessar o sistema
            </Link>
            <Link to="/paleta-de-cores" className="btn btn-outline-secondary btn-lg">
              Ver identidade visual
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <ImagemInstrumento inclinada />
        </div>
      </section>

      {/* Módulos do sistema — grid de 1, 2 ou 3 colunas conforme a largura */}
      <section className="mt-5" aria-labelledby="titulo-modulos">
        <h2 id="titulo-modulos" className="titulo-secao">
          Módulos do sistema
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {modulosSistema.map(({ id, titulo, descricao }, indice) => (
            <div className="col" key={id}>
              <ModuloCard numero={indice + 1} titulo={titulo} descricao={descricao} />
            </div>
          ))}
        </div>
      </section>

      {/* Conteúdo complementar */}
      <aside className={`mt-5 ${styles.curiosidade}`} aria-labelledby="titulo-curiosidade">
        <h2 id="titulo-curiosidade" className="h4">
          Você sabia?
        </h2>
        <p className="mb-2">
          As filarmônicas estão entre as instituições culturais mais antigas do
          interior do Brasil e, em muitas cidades, foram a primeira escola de música
          da comunidade.
        </p>
        <Link to="/sandbox" className={styles.linkCuriosidade}>
          Ouça o dobrado “Ouro Negro” na página SandBox →
        </Link>
      </aside>
    </div>
  );
}

export default Home;
