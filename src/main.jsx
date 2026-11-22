/**
 * Ponto de entrada da aplicação.
 *
 * A ordem dos imports de CSS é intencional: o Bootstrap é carregado primeiro para
 * que o CSS global do projeto possa sobrescrever suas variáveis com a paleta da marca.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Flags "future" antecipam o comportamento do React Router v7 e facilitam a migração. */}
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
