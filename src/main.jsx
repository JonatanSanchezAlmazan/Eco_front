import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './Providers/Users/UsersProvider.jsx';
import ActivitiesProvider from './Providers/Activities/ActivitiesProvider.jsx';
import AccommodationsProvider from './Providers/Accommodations/AccommodationsProvider.jsx';
import ReservationsProvider from './Providers/Reservations/Reservations.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsersProvider>
      <ReservationsProvider>
          <AccommodationsProvider>
            <ActivitiesProvider>
              <App />
            </ActivitiesProvider>
          </AccommodationsProvider>
      </ReservationsProvider>
    </UsersProvider>
  </BrowserRouter>
);
