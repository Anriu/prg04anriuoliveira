import PropTypes from 'prop-types';

import styles from './VideoResponsivo.module.css';

/**
 * Embed de vídeo fluido em 16:9. O iframe é posicionado absolutamente dentro de
 * um contêiner cuja altura é definida pela proporção, acompanhando a largura da tela.
 */
function VideoResponsivo({ src, titulo }) {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        src={src}
        title={titulo}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

VideoResponsivo.propTypes = {
  src: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default VideoResponsivo;
