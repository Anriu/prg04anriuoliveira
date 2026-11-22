import { Link } from 'react-router-dom';

import AmostraCor from '../components/AmostraCor';
import { gruposPaleta } from '../data/conteudo';
import useTituloPagina from '../hooks/useTituloPagina';
import styles from './PaletaCores.module.css';

/**
 * Documentação da identidade visual: cor principal, justificativa e tipo de
 * paleta. As amostras usam os mesmos tokens CSS aplicados em toda a interface.
 */
function PaletaCores() {
  useTituloPagina('Paleta de Cores');

  return (
    <div className="container py-4 py-md-5">
      <h1 className="titulo-secao">Paleta de Cores</h1>

      <section className="bloco" aria-labelledby="titulo-definicao">
        <h2 id="titulo-definicao" className="h4">
          Definição da paleta
        </h2>

        <div className={styles.corPrincipal}>
          <div className={styles.amostraPrincipal} aria-hidden="true" />
          <p className="mb-0">
            <strong>Cor principal: azul #1C3353.</strong> O azul está presente nas fardas
            de diversas bandas filarmônicas e, pela psicologia das cores, transmite
            seriedade, confiança e organização — qualidades esperadas de um sistema de
            gestão e de preservação da memória institucional.
          </p>
        </div>

        <p>
          <strong>Tipo de paleta: combinada.</strong> O azul é a cor principal; o verde é
          a cor complementar (também comum nas fardas); os tons neutros de cinza dão
          equilíbrio; o vermelho é reservado a destaques e ações destrutivas; e os tons de
          laranja, marrom, bege e dourado remetem ao bronze e às madeiras dos instrumentos.
        </p>
        <p className="mb-0">
          Como as cores são variáveis CSS (<code>--cor-primaria</code>,{' '}
          <code>--cor-secundaria</code>, <code>--cor-destaque</code>...), o cabeçalho, os
          botões, os cards e a tabela do painel usam exatamente estes valores.
        </p>
      </section>

      {gruposPaleta.map(({ id, titulo, cores }) => (
        <section key={id} className="bloco" aria-labelledby={`grupo-${id}`}>
          <h2 id={`grupo-${id}`} className="h5">
            {titulo}
          </h2>
          <ul className={styles.listaCores}>
            {cores.map((cor) => (
              <AmostraCor key={cor.classe} {...cor} />
            ))}
          </ul>
        </section>
      ))}

      <Link to="/" className="btn btn-outline-primary">
        ← Voltar para a página inicial
      </Link>
    </div>
  );
}

export default PaletaCores;
