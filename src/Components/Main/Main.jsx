import men from '../../assets/user_icon.png'
import compass from "../../assets/compass_icon.png"
import bulb from "../../assets/bulb_icon.png"
import message from "../../assets/message_icon.png"
import code from "../../assets/code_icon.png"
import gallery from "../../assets/gallery_icon.png"
import mic from "../../assets/mic_icon.png"
import send from "../../assets/send_icon.png"
import './main.css'
const Main = () => {
     return (
          <div className='main'>
               <div className='nav'>
                    <p>Gemini-Ai</p>
                    <img src={men} alt="" />
               </div> 
               <div className="main-content">
                    <div className="great">
                         <p><span>Hello Dev,</span></p>
                         <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                         <div class="card =">
                               <p>Suggest beautiful places to see on an upcoming road trip</p>
                               <img src={compass} alt="" />
                         </div>
                         <div class="card =">
                               <p>Briefly summarize this concept: urban planning</p>
                               <img src={bulb} alt="" />
                         </div>
                         <div class="card =">
                               <p>Brainstorm team bonding activities for our work retreat</p>
                               <img src={message} alt="" />
                         </div>
                         <div class="card =">
                               <p>Tell me about React js and React native</p>
                               <img src={code} alt="" />
                         </div>
                         
                    </div>
                    <div className="main-bottom">
                         <div className="search-box">
                                <input type="text" placeholder='Enter prompt message' />
                                <div>
                                   <img src={gallery} alt="" />
                                   <img src={mic} alt="" />
                                   <img src={send} alt="" />
                                </div>
                         </div>
                         <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                    </div>
               </div>
          </div>
     );
};

export default Main;