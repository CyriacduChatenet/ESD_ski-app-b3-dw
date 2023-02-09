import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from '@/setup/router';

import '@/app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
