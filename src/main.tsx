import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { captureUtm } from './lib/analytics'
import './index.css'

// Record first-touch UTM parameters before anything else renders.
captureUtm()

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root container #root was not found in index.html')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
