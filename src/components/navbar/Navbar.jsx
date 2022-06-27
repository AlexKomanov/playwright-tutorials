import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchSharp } from '@mui/icons-material';
import React from 'react'
import "./navbar.scss";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchSharp />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className='icon'/>
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className='icon'/>
          </div>
          <div className="item">
            <img src="https://cdn.pixabay.com/photo/2016/06/28/01/42/chess-1483735_960_720.jpg" 
            alt="avatar" 
            className="avatar"
            />
          </div>
        </div>
        </div>      
      
      </div>
  )
}

export default Navbar