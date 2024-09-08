import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import DonerRegistration from './Components/Registration/DonerRegistration';
import DonerLogin from './Components/Login/DonerLogin';
import Dashboard from './Components/Dashboard/Dashboard';
import MeetOurTeam from './Components/MeetOurTeam/MeetOurTeam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <LandingPage />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/registration"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <DonerRegistration />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <DonerLogin />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow">
                <MeetOurTeam />
              </div>
              <Footer />
            </div>
          }
        />

        {/* Route without Navbar and Footer */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;