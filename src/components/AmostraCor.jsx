import PropTypes from 'prop-types';

import styles from './AmostraCor.module.css';

/**
 * Amostra de uma cor da paleta.
 * A cor vem do CSS, não do JS: cada `classe` mapeia para uma regra que lê o token
 * correspondente em src/styles/index.css. Assim a página exibe exatamente os
 * valores usados no restante da interface, sem estilos inline.
 */
function AmostraCor({ classe, hex, papel = '', textoEscuro = false }) {
  const classes = [styles.amostra, styles[classe], textoEscuro ? styles.textoEscuro : '']
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classes}>
      <span className={styles.hex}>{hex}</span>
      {papel && <span className={styles.papel}>{papel}</span>}
    </li>
  );
}

AmostraCor.propTypes = {
  classe: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  papel: PropTypes.string,
  textoEscuro: PropTypes.bool,
};

export default AmostraCor;
