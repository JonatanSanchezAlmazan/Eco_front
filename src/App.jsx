import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Activities from './Pages/Activities/Activities';
import Accommodations from './Pages/Accommodations/Accommodations';
import About from './Pages/About/About';
import Ecoturismo from './Pages/Ecoturismo/Ecoturismo';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Owner from './Pages/Owner/Owner';
import Profile from './Pages/Profile/Profile';
import Activity from './Pages/Activity/Activity';
import Accommodation from './Pages/Accommodation/Accommodation';
import { useContext } from 'react';
import Loading from './Components/Loading/Loading';
import { UsersContext } from './Providers/Users/UsersProvider';
import Alert from './Components/Alert/Alert';
import RegisterActivity from './Pages/RegisterActivity/RegisterActivity';
import { ActivitiesContext } from './Providers/Activities/ActivitiesProvider';
import { AccommodationsContext } from './Providers/Accommodations/AccommodationsProvider';
import RegisterAccommodation from './Pages/RegisterAccommodation/RegisterAccommodation';

const App = () => {
  const { state } = useContext(UsersContext);
  const { state: activitiesState } = useContext(ActivitiesContext);
  const { state: accommodationsState } = useContext(AccommodationsContext);
  const message = state.error || activitiesState.error || accommodationsState.error || activitiesState.message;
  const loading = state.isLoading || activitiesState.isLoading || accommodationsState.isLoading;

  return (
    <>
      {loading && <Loading />}
      {message && <Alert message={message} />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/ecoturismo" element={<Ecoturismo />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/about" element={<About />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activity/:id" element={<Activity />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/registerActivity" element={<RegisterActivity />} />
        <Route path="/registerAccommodation" element={<RegisterAccommodation />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
