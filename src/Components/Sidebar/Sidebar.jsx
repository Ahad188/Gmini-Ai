import menu from '../../assets/menu_icon.png';
import plus from '../../assets/plus_icon.png';
import message from '../../assets/message_icon.png';
import help from '../../assets/question_icon.png';
import history from '../../assets/history_icon.png';
import settings from '../../assets/setting_icon.png';
import './sidebar.css'

const Sidebar = () => {
     return (
          <div className='sidebar'>
               <div className="top">
                    <img className='menu' src={menu} alt="" />
                    <div className="new-chat">
                         <img className='plus' src={plus} alt="" />
                         <p>New Chat</p>
                    </div>
                    <div className="recent">
                         <p className="recent-title">Recent</p>
                         <div className="recent-entry">
                              <img src={message} alt="" />
                              <p>what is react .....</p>
                         </div>
                    </div>
               </div>

               <div className="bottom">
                    <div className="bottom-item recent-entry">
                         <img src={help} alt="" />
                         <p>Help</p>
                    </div>
                    <div className="bottom-item recent-entry">
                         <img src={history} alt="" />
                         <p>History</p>
                    </div>
                    <div className="bottom-item recent-entry">
                         <img src={settings} alt="" />
                         <p>Settings</p>
                    </div>
               </div>
          </div>
     );
};

export default Sidebar;