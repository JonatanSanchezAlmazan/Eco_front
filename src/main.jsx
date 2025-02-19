import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './Providers/Users/UsersProvider.jsx';
import ActivitiesProvider from './Providers/Activities/ActivitiesProvider.jsx';
import AccommodationsProvider from './Providers/Accommodations/AccommodationsProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsersProvider>
      <AccommodationsProvider>
        <ActivitiesProvider>
          <App />
        </ActivitiesProvider>
      </AccommodationsProvider>
    </UsersProvider>
  </BrowserRouter>
);
