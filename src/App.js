import React from 'react';
import Greeting from './khurshed.jsx/Greeting';
import Messages from './khurshed.jsx/Messages';
import Statistics from './khurshed.jsx/Statistics';

function App() {
  // User Data Object
  const user1 = {
    name: "Khurshed Ahmed ",
    email: "khurshedahmedbanglani@gmail.com",
    role: "Developer",
   // profilePicture: "https://via.placeholder.com/150"
  };

  // Statistics Object
  const statistics1 = {
    projectsCompleted: 8,
    hoursWorked: 25,
    bugsFixed: 45
  };

  // Messages Array
  const messages1 = {
    msg1:"Welcome to the dashboard!",
    msg2:"Your next project deadline is approaching.",
  };

  return (
    <div>
      <Greeting user={user1} />
      <Statistics stats={statistics1} />
      <Messages messages={messages1}/>
    </div>
  );
}

export default App;
