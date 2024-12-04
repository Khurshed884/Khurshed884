import React from 'react';
import "../Style/App.css"
function Messages({ messages }) {
  return (
    <div>
      <h2>Messages</h2>
     <p>{messages.msg1}</p>
    </div>
  );
}

export default Messages;
