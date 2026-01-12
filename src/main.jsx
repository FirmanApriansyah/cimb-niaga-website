import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/400.css";
import'./index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='overflow-x-hidden max-w-full'>
      <App />
    </div>
  </StrictMode>,
)
