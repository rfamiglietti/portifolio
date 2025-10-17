import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx'; //  NOVO IMPORT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  ENVOLVE O APP NO THEMEPROVIDER */}
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);