import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/index.scss'
import {  QueryClient, QueryClientProvider } from 'react-query'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

