import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

// Ano do copyright calculado em tempo de execução para não ficar defasado.
const ANO_ATUAL = new Date().getFullYear();

/**
 * Rodapé global: descrição do projeto, links rápidos e autoria.
 */
function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={`container ${styles.conteudo}`}>
        <section className={styles.coluna} aria-labelledby="rodape-projeto">
          <h2 id="rodape-projeto" className={styles.titulo}>
            Projeto Filarmônicas
          </h2>
          <p className={styles.texto}>
            Valorizando a cultura, a música e a história das bandas filarmônicas.
          </p>
        </section>

        <nav className={styles.coluna} aria-label="Links do rodapé">
          <h2 className={styles.titulo}>Navegue</h2>
          <ul className={styles.links}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/paleta-de-cores">Paleta de Cores</Link></li>
            <li><Link to="/login">Área administrativa</Link></li>
          </ul>
        </nav>

        <section className={styles.coluna} aria-labelledby="rodape-autoria">
          <h2 id="rodape-autoria" className={styles.titulo}>
            Autoria
          </h2>
          <p className={styles.texto}>
            Desenvolvido por <strong>Anriu Oliveira</strong> para a disciplina
            PRG04 — Programação Web (IFBA).
          </p>
        </section>
      </div>

      <p className={styles.copyright}>
        <small>© {ANO_ATUAL} Projeto Filarmônicas. Todos os direitos reservados.</small>
      </p>
    </footer>
  );
}

export default Footer;
