import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

export function SidebarChat({addNewChat}) {
    const [seed,setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));

    },[]);
    
    const createChat = ()=>{
        const roomName = prompt ("Please enter Chatroom name");
        if (roomName){
            //do DB stuff
        }
    };

    return !addNewChat ?(
      <div className = "sidebarChat">
          <Avatar src ={`https://avatars.dicebear.com/api/human/${seed}.svg?mood[]=happy`}/>
          <div className="sidebarChat__Info">
              <h2>Room name</h2>
              <p>Last message...</p>
          </div>
      </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}
