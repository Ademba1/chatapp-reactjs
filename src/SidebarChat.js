import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './SidebarChat.css';

export function SidebarChat({id,name,addNewChat}) {
    const [seed,setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));

    },[]);
    
    const createChat = ()=>{
        const roomName = prompt ("Please enter Chatroom name");
        if (roomName){
            //Add Rooms do Firebase Realtime database
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };

    return !addNewChat ?(
      <div className = "sidebarChat">
          <Avatar src ={`https://avatars.dicebear.com/api/human/${seed}.svg?mood[]=happy`}/>
          <div className="sidebarChat__Info">
              <h2>{name}</h2>
              <p>Last message...</p>
          </div>
      </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}
