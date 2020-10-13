import React from 'react';
import './myCSS.css'

function Contact(){
    return (
       <div>
           <div class="Contact">
               <img class="avatar" src={contact1.avatar}></img>
               <div>
                    <h1 class="name">{contact1.name}</h1> 
                    <div class="status">
                        <img src="" class="status-online"></img>
                        <h2 class="status-text">{contact1.status}</h2> 
                    </div>
               </div>
           </div>
       </div> 
    )
}

const contact1 = {
    avatar: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    name: "Bart 1",
    status: "online"
  };

export default Contact;