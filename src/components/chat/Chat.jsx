import { useState, useEffect, useRef } from 'react'
import './chat.css'
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
  const [ open, setOpen ] = useState(false)
  const [ text, setText ] = useState("")

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = e =>{
    setText(prev=>prev+e.emoji)
    setOpen(false)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum totam nulla ut autem alias, explicabo quia possimus aliquam ullam dignissimos neque odio. Et cum cupiditate facere eligendi reprehenderit commodi?</p>
            <span>1 min ago</span>
          </div>          
        </div>
        <div className="message own">          
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum totam nulla ut autem alias, explicabo quia possimus aliquam ullam dignissimos neque odio. Et cum cupiditate facere eligendi reprehenderit commodi?</p>
            <span>1 min ago</span>
          </div>          
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="data:image/webp;base64,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" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum totam nulla ut autem alias, explicabo quia possimus aliquam ullam dignissimos neque odio. Et cum cupiditate facere eligendi reprehenderit commodi?</p>
            <span>1 min ago</span>
          </div>          
        </div>
        <div className="message own">          
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum totam nulla ut autem alias, explicabo quia possimus aliquam ullam dignissimos neque odio. Et cum cupiditate facere eligendi reprehenderit commodi?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">          
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum totam nulla ut autem alias, explicabo quia possimus aliquam ullam dignissimos neque odio. Et cum cupiditate facere eligendi reprehenderit commodi?</p>
            <span>1 min ago</span>
          </div>          
        </div><div className="message own">          
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eum totam nulla ut autem alias, explicabo quia possimus aliquam ullam dignissimos neque odio. Et cum cupiditate facere eligendi reprehenderit commodi?</p>
            <span>1 min ago</span>
          </div>          
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...' 
          value={text} 
          onChange={e=>setText(e.target.value)}
        />
        <div className='emoji'>
          <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>          
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat