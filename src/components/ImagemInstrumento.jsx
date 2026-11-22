import PropTypes from 'prop-types';

import tuba from '../assets/images/tuba.png';
import trompete from '../assets/images/trompete.png';
import clarinete from '../assets/images/clarinete.png';
import styles from './ImagemInstrumento.module.css';

/**
 * Imagem responsiva por art direction: o navegador escolhe o arquivo conforme a
 * largura da tela e baixa apenas o necessário.
 *   até 600px   → clarinete (fallback do <img>)
 *   601–1024px  → trompete
 *   ≥ 1025px    → tuba
 */
function ImagemInstrumento({ inclinada = false }) {
  return (
    <picture className={styles.moldura}>
      <source media="(min-width: 1025px)" srcSet={tuba} type="image/png" />
      <source media="(min-width: 601px)" srcSet={trompete} type="image/png" />
      <img
        src={clarinete}
        alt="Instrumento de sopro de uma banda filarmônica (muda conforme o tamanho da tela)"
        className={`${styles.imagem} ${inclinada ? styles.inclinada : ''}`}
        loading="lazy"
      />
    </picture>
  );
}

ImagemInstrumento.propTypes = {
  inclinada: PropTypes.bool,
};

export default ImagemInstrumento;
