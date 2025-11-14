import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from './provider.tsx'
import '@/styles/globals.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
)
