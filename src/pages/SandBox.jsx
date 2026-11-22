import { Link } from 'react-router-dom';

import VideoResponsivo from '../components/VideoResponsivo';
import useTituloPagina from '../hooks/useTituloPagina';

// Arquivos de public/ são servidos a partir da raiz do site.
const AUDIO_DOBRADO = '/audio/dobrado-ouro-negro.mp3';
const VIDEO_PARTITURA = 'https://www.youtube.com/embed/2EU7NRYufqw?start=8';

/**
 * Página de mídia: áudio e vídeo relacionados ao repertório.
 * Sem autoplay: os navegadores bloqueiam reprodução automática com som e iniciar
 * áudio sem ação do usuário prejudica a acessibilidade.
 */
function SandBox() {
  useTituloPagina('SandBox');

  return (
    <div className="container py-4 py-md-5">
      <h1 className="titulo-secao">SandBox — testando conceitos</h1>

      <section className="bloco" aria-labelledby="titulo-audio">
        <h2 id="titulo-audio" className="h5">
          Áudio: Dobrado “Ouro Negro”, de Joaquim Naegele
        </h2>
        <audio className="w-100" controls preload="metadata">
          <source src={AUDIO_DOBRADO} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      </section>

      <section className="bloco" aria-labelledby="titulo-video">
        <h2 id="titulo-video" className="h5">
          Vídeo: partitura do dobrado
        </h2>
        <VideoResponsivo src={VIDEO_PARTITURA} titulo="Partitura do dobrado Ouro Negro (YouTube)" />
      </section>

      <Link to="/" className="btn btn-outline-primary">
        ← Voltar à página inicial
      </Link>
    </div>
  );
}

export default SandBox;
