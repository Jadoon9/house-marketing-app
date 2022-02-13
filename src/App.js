import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Category from './components/pages/Category';
import CreateListing from './components/pages/CreateListing';

import Explore from './components/pages/Explore';
import ForgotPassword from './components/pages/ForgotPassword';
import Offers from './components/pages/Offers';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import Signup from './components/pages/Signup';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/create-listing' element={<CreateListing />} />
      </Routes>
      <Navbar />
    </>
  );
};

export default App;
