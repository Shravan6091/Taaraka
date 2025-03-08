import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import HomePage from './pages/HomePage';
import VisionMission from './pages/VisionMission';
import TrainingCell from './pages/TrainingCell';
import FreelanceServices from './pages/FreelanceServices';
import FreelancerRegister from './pages/FreelancerRegister';  // New Route
import ClientRegister from './pages/ClientRegister';  // New Route
import FreelanceProjects from './pages/FreelanceProjects'; // Assuming you have this page
import Internships from './pages/Internships';
import ResearchDevelopment from './pages/ResearchDevelopment';
import CareerOpportunities from './pages/CareerOpportunities';
import SocialResponsibility from './pages/SocialResponsibility';
import ContactUs from './pages/ContactUs';
import RegisterLogin from './pages/RegisterLogin';
import NotFound from './pages/NotFound';

// Dashboard Pages for each role
import FreelancerDashboard from './pages/FreelancerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import TraineeDashboard from './pages/TraineeDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import PilotDashboard from './pages/PilotDashboard';

const App = () => {
  return (
    <div className="App">
      {/* Navbar should be visible on all pages */}
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/training-cell" element={<TrainingCell />} /> {/* Training Cell Route */}
        <Route path="/freelance-services" element={<FreelanceServices />} /> {/* Freelance Services Route */}
        <Route path="/freelancer-register" element={<FreelancerRegister />} />  {/* New Route for Freelancer Registration */}
        <Route path="/client-register" element={<ClientRegister />} />  {/* New Route for Client Registration */}
        <Route path="/freelance-projects" element={<FreelanceProjects />} />  {/* New Route for Freelance Projects */}
        <Route path="/internships" element={<Internships />} />
        <Route path="/research-development" element={<ResearchDevelopment />} />
        <Route path="/career-opportunities" element={<CareerOpportunities />} /> {/* Career Opportunities Route */}
        <Route path="/social-responsibility" element={<SocialResponsibility />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/registerLogin" element={<RegisterLogin />} />

        {/* Dashboard Routes for each role */}
        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/trainee-dashboard" element={<TraineeDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/pilot-dashboard" element={<PilotDashboard />} />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
