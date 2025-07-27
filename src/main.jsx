// main.jsx - Entry point for the DailyBuzz React application

import { StrictMode } from 'react' // Import React's StrictMode for highlighting potential problems
import { createRoot } from 'react-dom/client' // Import createRoot for React 18+ concurrent rendering
import './index.css' // Global styles
import App from './App.jsx' // Main App component

// Mount the React app to the #root div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
