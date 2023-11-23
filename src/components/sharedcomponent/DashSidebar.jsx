import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { BiBarChart, BiBuildings, BiHive, BiSpreadsheet, BiWifiOff, BiRecycle, BiRepost, BiTimeFive, BiTachometer, BiUser, BiSpa, BiCircle, BiDrink, BiArrowFromBottom, BiCog } from "react-icons/bi";
import { connect, useSelector, useDispatch } from 'react-redux';
import strings from '../sharedcomponent/localization';

function DashSidebar(props) {

  const data = useSelector((state) => {
    return state
  });

  let getLan = data.lang.langType;
  const culture = getLan === 'ar' ? strings.ar : strings.en;

  const menulist = [
    {
      menuTitle: 'Insight',
      menuURL: 'Insight',
    },
    {
      menuTitle: 'Organizations',
      menuURL: 'Organizations',
    },
    {
      menuTitle: 'Scenarios',
      menuURL: 'Scenarios',
    },
    {
      menuTitle: 'Web Tests',
      menuURL: 'WebTests',
    },
    {
      menuTitle: 'Api Tests',
      menuURL: 'ApiTests',
    },
    {
      menuTitle: 'Performance Test',
      menuURL: 'PerformanceTest',
    },
    {
      menuTitle: 'Performance Beta',
      menuURL: 'PerformanceBeta',
    },
    {
      menuTitle: 'Schedules',
      menuURL: 'Schedules',
    },
    {
      menuTitle: 'Runs',
      menuURL: 'Runs',
    },
    {
      menuTitle: 'Members',
      menuURL: 'Members',
    },
    {
      menuTitle: 'Policies',
      menuURL: 'Policies',
    },
    {
      menuTitle: 'Automation',
      menuURL: 'Automation',
    },
    {
      menuTitle: 'DataTool',
      menuURL: 'Migrations',
      nestedMenulist: [
        {
          childMenuTitle: 'Migrations',
          childMenuURL: 'Migrations',
        },
        {
          childMenuTitle: 'Rules',
          childMenuURL: 'Rules',
        }
      ]
    },
    {
      menuTitle: 'Settings',
      menuURL: 'Settings',
    },
  ];

  const [selectedMenu, selectedMenuSet] = useState();

  const renderIcon = (icon) => {
    switch (icon) {
      case "Insight":
        return <BiBarChart />;
      case "Organizations":
        return <BiBuildings />;
      case "Scenarios":
        return <BiHive />;
      case "WebTests":
        return <BiSpreadsheet />;
      case "ApiTests":
        return <BiWifiOff />;
      case "PerformanceTest":
        return <BiRecycle />;
      case "PerformanceBeta":
        return <BiRepost />;
      case "Schedules":
        return <BiTimeFive />;
      case "Runs":
        return <BiTachometer />;
      case "Members":
        return <BiUser />;
      case "Policies":
        return <BiSpa />;
      case "Automation":
        return <BiDrink />;
      case "DataTool":
        return <BiArrowFromBottom />;
      case "Settings":
        return <BiCog />;
      default:
        return <BiArrowFromBottom />
    }
  }

  return (
    <div className={props.sidebarCtrl}>
      <ul className='sidebar'>
        {menulist?.map((item, index) => (
          <li key={index.toString()}>
            <NavLink to={item.menuURL}
              className={selectedMenu === item.menuTitle ? 'active' : ''}
              onClick={() => selectedMenuSet(item.menuURL)}>
              <i>{renderIcon(item.menuURL)}</i>
              <title className={props.titleCtrl}>{item.menuTitle}</title></NavLink>
            {selectedMenu === item.menuURL && item.nestedMenulist &&
              <ul>
                {item.nestedMenulist?.map((cItem, index) => (
                  <li key={index.toString()}><Link to={cItem.childMenuURL}>{cItem.childMenuTitle}</Link> </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashSidebar;


