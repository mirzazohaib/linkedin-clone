import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="" />

        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
       <HeaderOption Icon={HomeIcon} title='Home'/>
       <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
       <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
       <HeaderOption Icon={ChatIcon} title='Messaging'/>
       <HeaderOption Icon={NotificationsIcon} title='Notifications' />
       <HeaderOption avatar="https://avatars.githubusercontent.com/u/54810131?s=400&u=3341cdbd4d5d18ffb5dac201ddaa88a71dcefe1c&v=4" title='me' />
      </div>
    </div>
  );
}

export default Header;
