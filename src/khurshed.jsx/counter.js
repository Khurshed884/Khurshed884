import React, { useState } from 'react';

function Counter() {

   const [count, setCount] = useState(0);
   const increament = () => {setCount(count + 1);};
   const decrease = () => {setCount(count - 1);};
   const  Reset = () => {setCount(0);};

   return (
    <div>
        <h1>Count: {count}</h1>
       <button onClick={() => setCount(count + 1)}>Increase</button>
       <button onClick={() => setCount(count - 1)}>decrease</button>
       <button onClick={() => setCount(0)}>Reset</button>
     </div>
   );
}
export default Counter