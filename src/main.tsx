import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { authStore } from '@/stores/auth.store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/* Rehydrate Zustand persist stores after React mounts to avoid hooks-order mismatch */
authStore.persist.rehydrate();
