import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import AttachmentIcon from '@material-ui/icons/Attachment';
import "./Chat.css";


export default function Chat(props) {
    const [seed,setSeed] = useState(''); //Create state for the seed variable
    const [input,setInput] = useState('');//Create state for the input 
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));// Change the value of the seed variable using a random number

    },[]);

    const sendMessage =  (e) => {
        e.preventDefault();
        console.log("You Typed >>>", input) //check if the input message is being stored to memory 
        
        setInput("") //clears Input field after pressing enter
    }
    return (
      <div className="chat">
          <div className="chat__header">
          <Avatar src ={`https://avatars.dicebear.com/api/human/${seed}.svg?mood[]=happy`}/>
          <div className="chat__headerInfo">
              <h3>Room name</h3>
              <p>Last seen at...</p>
          </div>
          <div className="chat__headerRight">
                <IconButton > 
                <SearchOutlined />
                </IconButton>
                <IconButton >
                <AttachFile />
                </IconButton>
                <IconButton >
                <MoreVert />
                </IconButton>
      
          </div>
          </div>
          <div className="chat__body">
              <p className={`chat__message ${true && "chat__receiver"}`}>
                  <span className="chat__username">Oscar Otieno</span>
              Hey guys
                <span className="chat__timestamp">
                    8.23pm
                </span>
              </p>
              
          </div>
          <div className="chat__footer">
          <IconButton > 
              <InsertEmoticonIcon />
              </IconButton>
              <IconButton >
              <AttachmentIcon />
              </IconButton>
              <form>
                  <input value={input} onChange={e=> setInput(e.target.value)} placeholder="Type a message" type="text"/>
                  <button onClick={sendMessage} type="submit">Send a message</button>
              </form>
              <IconButton >
              <MicIcon />
              </IconButton>
          </div>

      </div>    
      )
}
