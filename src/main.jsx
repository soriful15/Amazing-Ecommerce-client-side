import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import {  HelmetProvider } from 'react-helmet-async';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(


  // <QueryClientProvider client={queryClient}>
  <HelmetProvider>
     <div className='max-w-7xl lg:max-w-full mx-auto'>
     <RouterProvider router={router}></RouterProvider>,
     </div>
  </HelmetProvider>
// </QueryClientProvider>
)
