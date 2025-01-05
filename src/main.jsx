import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FormContext, FormProvider } from './Context/FormContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormProvider>

  </StrictMode>
)
