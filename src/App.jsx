import "@fontsource/inter"; // Defaults to 400 weight
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import KeyFeatures from "./components/KeyFeatures";
import HowItWorks from "./components/HowItWorks";
import ReminderAnalyze from "./components/ReminderAnalyze";
import AboutUs from "./components/AboutUs";
import AboutUsMission from "./components/AboutUsMission";
import AboutUsTeam from "./components/AboutUsTeam";
import ReviewAnalyzer from "./components/ReviewAnalyzer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Intro />
              <KeyFeatures />
              <HowItWorks />
              <ReminderAnalyze />
              <AboutUs />
              <AboutUsMission />
              <AboutUsTeam />
              <ReviewAnalyzer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* About Page Example */}
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <AboutUsMission />
              <AboutUsTeam />
            </>
          }
        />

        {/* Add more pages here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
