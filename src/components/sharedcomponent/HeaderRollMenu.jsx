import React, { useState, useRef } from 'react';
import { BiDesktop } from "react-icons/bi";

function HeaderRollMenu() {

    const [headerMenu, SetheaderMenu] = useState(false);

    const menuHide = useRef(null)
    const closeOpenMenus = (e) => {
        if (menuHide.current && headerMenu && !menuHide.current.contains(e.target)) {
            SetheaderMenu(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    const [rollSelect, SetrollSelect] = useState('Auton8 Academy');

    const rollList = [
        {
            rollTitle: 'Auton8 Academy',
        },
        {
            rollTitle: 'Auton8 Academy2',
        },
        {
            rollTitle: 'Auton8 Academy3',
        }
    ];

    return (
        <div className='headerRollMenu'>
            <button onClick={() => SetheaderMenu(!headerMenu)}> <BiDesktop /> {rollSelect}</button>
            {headerMenu &&
                <ul ref={menuHide}>
                    {rollList.map((item, index) =>
                        <li key={index.toString()} onClick={()=>SetrollSelect(item.rollTitle)}>{item.rollTitle}</li>
                    )}
                </ul>
            }
        </div>
    );
}

export default HeaderRollMenu;