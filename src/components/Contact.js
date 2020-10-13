import React from 'react';
import './myCSS.css'

function Contact(props){
    return (
        <div class="Contact">
            <img class="avatar" alt="" src={props.avatar} />
            <div>
                <h3 class="name">{props.name}</h3>
                <div class="status">
                    <div class={props.online ? "status-online" : "status-offline"} />
                    <p class="status-text">{props.online ? "online" : "offline"}</p>  
                </div>
            </div>
        </div>
    )
}

export default Contact;