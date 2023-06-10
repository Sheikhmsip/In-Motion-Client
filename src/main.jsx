import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import '@smastrom/react-rating/style.css'
import AuthProvider from './AuthProviders/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={ queryClient}>
        <div className='w-[95%] mx-auto'>
          <RouterProvider router={router}>
          </RouterProvider>
        </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>



  </React.StrictMode>,
)
