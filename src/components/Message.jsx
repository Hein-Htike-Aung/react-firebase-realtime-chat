import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  // to Scroll to see latest message
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isCurrentUserMessage = () => message.senderId === currentUser.uid;

  return (
    <div ref={ref} className={`message ${isCurrentUserMessage() && "owner"}`}>
      <div className="messageInfo">
        <img
          src={
            isCurrentUserMessage() ? currentUser.photoURL : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
