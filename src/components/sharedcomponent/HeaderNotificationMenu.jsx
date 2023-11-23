import React, { useState,useRef } from 'react';
import { BiBell } from "react-icons/bi";

function HeaderNotificationMenu() {

    const [headerMenu, SetheaderMenu] = useState(false);

    const menuHide = useRef(null)
    const closeOpenMenus = (e) => {
        if (menuHide.current && headerMenu && !menuHide.current.contains(e.target)) {
            SetheaderMenu(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    return (
        <div className='headerNotificationMenu'>
            <button onClick={() => SetheaderMenu(!headerMenu)}><span>10+</span><BiBell /></button>
            {headerMenu &&
                <ul ref={menuHide}>
                    <li>User Added Successfully</li>
                    <li>User Update Successfully</li>
                    <li>User Delete Successfully</li>
                    <li>User Pending Unsuccessfully</li>
                </ul>
            }
        </div>
    );
}

export default HeaderNotificationMenu;