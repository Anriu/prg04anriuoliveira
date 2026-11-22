import { useEffect } from 'react';

const NOME_SITE = 'Portal da Filarmônica';

/**
 * Define o <title> do documento para a rota atual.
 * Em uma SPA há um único index.html, então o título precisa ser atualizado
 * em tempo de execução (útil para histórico, abas e leitores de tela).
 */
export default function useTituloPagina(titulo) {
  useEffect(() => {
    document.title = titulo ? `${titulo} | ${NOME_SITE}` : NOME_SITE;
  }, [titulo]);
}
