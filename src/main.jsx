import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(


  <QueryClientProvider client={queryClient}>
  <HelmetProvider>

     {/* <div className='max-w-screen-2xl mx-auto'> */}
     <div className='max-w-screen-xl container mx-auto'>
     <AuthProvider>
     <RouterProvider router={router}></RouterProvider>,
     </AuthProvider>
     </div>
  </HelmetProvider>
</QueryClientProvider>
)
