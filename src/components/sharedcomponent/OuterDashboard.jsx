import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
function OuterDashboard(props) {

  return (
    <div className="loginWrapper">
      <div className='loginLeft'>
        <Outlet />
      </div>
      <div className='loginRight'> 
      <h2>Welcome to <span>Auton <i>8</i></span></h2>
       <p>Automate your QA testing and achieve greater efficiency.</p>
       <h5>© 2023 Auton8. All rights reserved</h5>
      </div>
    </div>
  );
}

export default OuterDashboard;