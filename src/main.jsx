import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ReactHooks } from './components/react-hooks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactHooks />
  </StrictMode>,
);
