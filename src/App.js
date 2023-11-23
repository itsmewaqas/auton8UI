import '../src/assets/dependencies.jsx';
import {
  Routes,
  useLocation,
  Route
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import OuterDashboard from './components/sharedcomponent/OuterDashboard.jsx';
import Login from './components/pagecomponent/LoginRoutes/Login.jsx';
import Signup from './components/pagecomponent/LoginRoutes/Signup.jsx';
import ForgotPassword from './components/pagecomponent/LoginRoutes/ForgotPassword.jsx';
import Otp from './components/pagecomponent/LoginRoutes/Otp.jsx';

import InnerDashboard from './components/sharedcomponent/InnerDashboard.jsx';
import Insight from './components/pagecomponent/Insight/Insight.jsx'
import Organizations from './components/pagecomponent/Organizations/Organizations.jsx';
import Scenarios from './components/pagecomponent/Scenarios/Scenarios.jsx';
import WebTests from './components/pagecomponent/WebTests/WebTests.jsx';
import CreateTests from './components/pagecomponent/WebTests/CreateTests.jsx';
import ApiTests from './components/pagecomponent/ApiTests/ApiTests.jsx';
import PerformanceTest from './components/pagecomponent/PerformanceTest/PerformanceTest.jsx';
import PerformanceBeta from './components/pagecomponent/PerformanceBeta/PerformanceBeta.jsx';
import Schedules from './components/pagecomponent/Schedules/Schedules.jsx';
import Runs from './components/pagecomponent/Runs/Runs.jsx';
import Members from './components/pagecomponent/Members/Members.jsx';
import Policies from './components/pagecomponent/Policies/Policies.jsx';
import Automation from './components/pagecomponent/Automation/Automation.jsx';
import Rules from './components/pagecomponent/DataTool/Rules.jsx';
import Migrations from './components/pagecomponent/DataTool/Migrations.jsx';
import Settings from './components/pagecomponent/Settings/Settings.jsx';
import NoMatch from './components/pagecomponent/NoMatch';

function App(props) {

  useEffect(() => {
  }, [])

  return (
    <div >
      <Routes>
        <Route path="/" element={<OuterDashboard />}>
          <Route exact path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/" element={<InnerDashboard />}>
        <Route index path="Insight" element={<Insight />} />
        <Route path="Organizations" element={<Organizations />} />
        <Route path="Scenarios" element={<Scenarios />} />
        <Route path="WebTests" element={<WebTests />} />
        <Route path="CreateTests" element={<CreateTests />} />
        <Route path="ApiTests" element={<ApiTests />} />
        <Route path="PerformanceTest" element={<PerformanceTest />} />
        <Route path="PerformanceBeta" element={<PerformanceBeta />} />
        <Route path="Schedules" element={<Schedules />} />
        <Route path="Runs" element={<Runs />} />
        <Route path="Members" element={<Members />} />
        <Route path="Policies" element={<Policies />} />
        <Route path="Automation" element={<Automation />} />
        <Route path="Rules" element={<Rules />} />
        <Route path="Migrations" element={<Migrations />} />
        <Route path="Settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
