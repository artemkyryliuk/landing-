import React from 'react'
import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
