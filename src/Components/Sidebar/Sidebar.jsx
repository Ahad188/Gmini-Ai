import menu from '../../assets/menu_icon.png';
import plus from '../../assets/plus_icon.png';
import message from '../../assets/message_icon.png';
import help from '../../assets/question_icon.png';
import history from '../../assets/history_icon.png';
import settings from '../../assets/setting_icon.png';
import './sidebar.css'
import { useState } from 'react';

const Sidebar = () => {
     const [extended,setExtended] = useState(false)
     return (
          <div className='sidebar'>
               <div className="top">
                    <img onClick={()=>setExtended(!extended)} className='menu' src={menu} alt="" />
                    <div className="new-chat">
                         <img className='plus' src={plus} alt="" />
                         {extended ? <p>New Chat</p> : '' }
                          
                    </div>
                    {
                         extended ?  <div className="recent">
                         <p className="recent-title">Recent</p>
                         <div className="recent-entry">
                              <img src={message} alt="" />
                              <p>what is react .....</p>
                         </div>
                    </div> : " "
                    }
               </div>

               <div className="bottom">
                    <div className="bottom-item recent-entry">
                         <img src={help} alt="" />
                         {
                              extended ? <p>Help</p> : ' '
                         }
                    </div>
                    <div className="bottom-item recent-entry">
                         <img src={history} alt="" />
                         {extended ? <p>History</p> : " "}
                         <p>History</p>
                    </div>
                    <div className="bottom-item recent-entry">
                         <img src={settings} alt="" />
                         {extended ? <p>Setting</p> : ""}
                    </div>
               </div>
          </div>
     );
};

export default Sidebar;