import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import GetHeight from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GetHeight />
  </StrictMode>,
)
