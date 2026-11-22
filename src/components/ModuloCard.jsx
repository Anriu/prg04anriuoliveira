import PropTypes from 'prop-types';

import styles from './ModuloCard.module.css';

/**
 * Card de apresentação de um módulo do sistema. Usa <article> por ser um bloco
 * de conteúdo autocontido dentro da listagem.
 */
function ModuloCard({ titulo, descricao, numero }) {
  return (
    <article className={`card h-100 ${styles.card}`}>
      <div className="card-body">
        <span className={`badge rounded-pill ${styles.numero}`} aria-hidden="true">
          {String(numero).padStart(2, '0')}
        </span>
        <h3 className={`card-title h5 ${styles.titulo}`}>{titulo}</h3>
        <p className="card-text mb-0">{descricao}</p>
      </div>
    </article>
  );
}

ModuloCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
};

export default ModuloCard;
