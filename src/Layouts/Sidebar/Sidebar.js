import React from 'react';
import { dashboardImages } from '../../constants/Images';
import './sidebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar, theme, setTheme }) {
    const width = window.innerWidth;

    const changeTheme = (event) => {
        event.preventDefault();
        setTheme(!theme);

    };

    const allClassName = `${openSidebarToggle ? "sidebar-responsive" : ""} ${theme ? 'dark-sidebar' : ''}`;

    return (
        <aside id="sidebar" className={allClassName}>
            <div>
                {width < 768 &&
                    <div className='sidebar-title'>
                        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                    </div>}
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.dashboardImage} className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.salesImage} className='icon' /> Sales
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.productImage} className='icon' /> Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.storesImage} className='icon' /> Stores
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.campaignImage} className='icon' /> Campaign
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.NotificationImage} className='icon' /> Notifications
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.SettingsImage} className='icon' /> Settings
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <img src={dashboardImages.ThemeImage} className='icon' /> Themes
                        <button className='btn bg-transparent' onClick={changeTheme}>
                            <img src={theme ? dashboardImages.darkTheme : dashboardImages.lightTheme} className='icon' />
                        </button>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;