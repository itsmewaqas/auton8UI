import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/Actions/index';
import Form from 'react-bootstrap/Form';
import HeaderProfileMenu from './HeaderProfileMenu';
import HeaderNotificationMenu from './HeaderNotificationMenu';
import HeaderRollMenu from './HeaderRollMenu';

function DashHeader(props) { 

  const dispatch = useDispatch();

  const [menuCollapse, menuCollapseSet] = useState(false);
  const menuCollapsed = () => {
    menuCollapseSet({ menuCollapse: !menuCollapse });
    props.sidebarCtrlFunc();
  }

  return (
    <div className='dashboardHeader'>
      <div className="logoArea">
        <a><img className='logo' src={require('../../assets/images/logo.png')} alt='' /> </a>
        <a onClick={() => menuCollapsed()}><img className='menuIcon' src={require('../../assets/images/menu.png')} alt='' /> </a>
      </div>
      <HeaderRollMenu />
      <HeaderProfileMenu />
      <HeaderNotificationMenu />
    </div>
  );
}

export default DashHeader;