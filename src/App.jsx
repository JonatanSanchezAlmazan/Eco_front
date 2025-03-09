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
import Loading from './Components/Loading/Loading';
import RegisterActivity from './Pages/RegisterActivity/RegisterActivity';
import RegisterAccommodation from './Pages/RegisterAccommodation/RegisterAccommodation';
import UpdateActivity from './Pages/UpdateActivity/UpdateActivity';
import UpdateAccommodation from './Pages/UpdateAccommodation/UpdateAccommodation';
import useLoadingState from './Hooks/useLoadingState';

const App = () => {
  const { loading } = useLoadingState();

  return (
    <>
      {loading && <Loading />}

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
        <Route path="/updateActivity/:id" element={<UpdateActivity />} />
        <Route path="/updateAccommodation/:id" element={<UpdateAccommodation />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
