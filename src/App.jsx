import "@fontsource/inter";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./components/login";
import SignUp from "./components/SingUp";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import TeamPer from "./pages/TeamPer";


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Home Page - includes navbar */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
           {/* ContactUs Page - includes navbar */}
          <Route
            path="/contactus"
            element={
              <>
                <Navbar />
                <ContactUs/>
              </>
            } 
            />

          {/* Login Page - standalone without navbar */}
          <Route path="/login" element={<>
               <Navbar /> 
               <Login /> </> } />
          {/* SignUp Page - standalone with navbar */}
          <Route path="/SignUp" element={<>
               <Navbar /> 
               <SignUp /> </> } />

           
         

          {/* About Page - includes navbar */}
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutPage />
                
              </>
            }
          />

        {/* Team Perfomance Page - includes navbar */}
          <Route
            path="/teamper"
            element={
              <>
                <Navbar />
                <TeamPer />
              </>
            }
          />
          {/* Catch all other routes and redirect to home */}
          <Route path="*" element={
            <>
              <Navbar />
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                  <a href="/" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                    Go Home
                  </a>
                </div>
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;''
