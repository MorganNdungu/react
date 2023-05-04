// const functional component=()=>{
//     const [name, setname]=usestate('john');
//     return(
//         <div>
//             <h1>functional component</h1>
//             {name};
//         </div>
//     );
// }
// export default functional component;
// import { useState } from "react";
// const FunctionalCounter =()=>{
//     const[counter, setCounter]= useState(0);

//     const increment=()=>{
//         setCounter(counter +1);
//     }
//     return(
//         <div>
//             <h1>
//                 the counter value is: {counter}
//             </h1>
//             <button onClick={increment}>increment</button>
//         </div>
//     )
// }
// export default FunctionalCounter;

// condition rendering

import {useState} from 'react';
const ConditionRendering =()=>{
    const[display, setDisplay]= useState(true);
    // let output;
//     if (display){
//         return(
//             <div>
//                 <h1>
//                     display is TRUE
//                 </h1>
//             </div>
//         );
//     }else{
//         return(
//         <div>
//             <h1>
//                 display is falsee
//             </h1>
//         </div>
//         )
//     }
// }

// ternary condition
return display?
(<div>
    <h1>TRUE</h1>
</div>):(<div>
    <h1> FALSE</h1>
</div>);
}

export default ConditionRendering;