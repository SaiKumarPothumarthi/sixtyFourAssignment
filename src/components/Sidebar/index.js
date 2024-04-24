import React, { useState } from 'react';
import './index.css';
import { IoSearchSharp } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { GoQuestion } from "react-icons/go";
import { FaCalendarDay } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { IoMdHeadset } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import Dashboard from '../Dashboard';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const listItems = [
    { icon: <IoSearchSharp className='list-icons' />, text: "Search" },
    { icon: <FiMonitor className='list-icons' />, text: "Monitor" },
    { icon: <GoQuestion className='list-icons' />, text: "Question" },
    { icon: <FaCalendarDay className='list-icons' />, text: "Calendar" },
    { icon: <BiBuildings className='list-icons' />, text: "Buildings" },
    { icon: <HiCurrencyDollar className='list-icons' />, text: "Currency" },
    { icon: <IoMdHeadset className='list-icons' />, text: "Headset" },
    {icon:<IoMdSettings className='list-icons' />,text:"Settings"}
  ];

  return (
    <div className='flex-row'>
      <nav className={expanded ? 'nav-expanded ' : 'nav'}>
        <div onClick={toggleSidebar}>
          <img src='https://store-images.s-microsoft.com/image/apps.13203.181b1e26-9911-4095-90bd-3822e3920a50.00e33a22-a128-4ba6-9abf-93961d06d669.da4fc8e7-5e85-4f8c-9139-474869d8d0a7.png' alt='logo' className='logo' />
        </div>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <div className='list-container'>
                <div>
              {item.icon}
              </div>
              <p className={expanded ? 'list-text-visible' : 'list-text'}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <Dashboard expanded={expanded} />
    </div>
  );
}