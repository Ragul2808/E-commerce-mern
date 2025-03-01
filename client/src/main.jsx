import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux'; // Fix: Capitalized "Provider"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}> {/* Fix: Capitalized "Provider" */}
      <App />
    </Provider>
  </BrowserRouter>
);
