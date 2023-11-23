import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  BrowserRouter,
  useLocation,
  Route,
  Outlet,
  useHistory,
  Redirect,
  Link
} from "react-router-dom";
import DashHeader from '../sharedcomponent/DashHeader';
import DashSidebar from '../sharedcomponent/DashSidebar';
import DashFooter from '../sharedcomponent/DashFooter';
import { connect, useSelector, useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InnerDashboard(props) {

  const location = useLocation();

  const data = useSelector((state) => {
    return state
  });

  let getLan = data.lang.langType;

  const notify = () => toast.success("Login Successfully", {
    position: "bottom-right",
    theme: "light",
    toastId: 'suc1',
  }); 

  useEffect(() => {
    notify();
  }, [])

  useEffect(() => {
    if (getLan == 'ar') {
      require("../../assets/css/styleRtl.scss");
    } else {
      require("../../assets/css/style.scss");
    }
  }, [])

  const [sidebarCtrl, sidebarCtrlSet] = useState("dashboardSidebar");
  const [titleCtrl, titleCtrlSet] = useState("titleShow");

  const sidebarCtrlFunc = () => {
    sidebarCtrlSet(sidebarCtrl == 'dashboardSidebar' ? 'dashboardSidebarCollaps' : 'dashboardSidebar');
    titleCtrlSet(titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow');
  }

  return (
    <div className="dashboardMain" style={{ direction: getLan == 'ar' ? 'rtl' : 'ltr' }}>
      <ToastContainer />
      <DashHeader
        sidebarCtrlFunc={sidebarCtrlFunc}
        titleCtrl={titleCtrl} /> 
      <DashSidebar
        sidebarCtrl={sidebarCtrl}
        titleCtrl={titleCtrl} />
      <div className='dashContainer'>
        <div className='dashContainerInner'>
          <Outlet />
        </div>
      </div>
      <DashFooter />
    </div>
  );
}

export default InnerDashboard;