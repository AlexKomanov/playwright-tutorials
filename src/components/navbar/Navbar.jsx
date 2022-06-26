import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchSharp } from '@mui/icons-material';
import React from 'react'
import "./navbar.scss";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="searh">
          <input type="text" placeholder='Search...' />
          <SearchSharp />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined />
            English
          </div>
          <div className="item">
            <DarkModeOutlined />
          </div>
          <div className="item">
            <FullscreenExitOutlined />
          </div>
          <div className="item">
            <NotificationsNoneOutlined />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined />
          </div>
          <div className="item">
            <ListOutlined />
          </div>
        </div>
        </div>      
      
      </div>
  )
}

export default Navbar