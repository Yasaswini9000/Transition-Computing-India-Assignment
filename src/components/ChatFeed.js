import React from "react";
import "./ChatFeed.scss";

const ChatFeed = () => {
  const messages = [
    { sender: "Rachel Adams", content: "Lorem ipsum dolor sit amet.", time: "9:00 PM" },
    { sender: "You", content: "Vestibulum ante ipsum primis.", time: "9:05 PM" },
  ];

  return (
    <div className="chat-feed">
      <h2>Chat / Feed</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span>{message.sender}</span>
            <p>{message.content}</p>
            <time>{message.time}</time>
          </div>
        ))}
      </div>
      <input type="text" placeholder="Type a message..." />
    </div>
  );
};

export default ChatFeed;
