import React from 'react';

function Contact(){
    return (
       <div>
           <div>
               <img src={contact1.image}></img>
               <h1>{contact1.firstName}</h1>
               <h3>{contact1.lastName}</h3>
           </div>
           <div>
               <img src={contact2.image}></img>
               <h1>{contact2.firstName}</h1>
               <h3>{contact2.lastName}</h3>
           </div>
           <div>
               <img src={contact3.image}></img>
               <h1>{contact3.firstName}</h1>
               <h3>{contact3.lastName}</h3>
           </div>
       </div> 
    )
}

const contact1 = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart 1",
    lastName: "Simpson 1"
  };

const contact2 = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart 2",
    lastName: "Simpson 2"
};

const contact3 = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart 3",
    lastName: "Simpson 3"
  };

export default Contact;