// const Message= ()=>{
//     let message=()=>{
//         alert("he heey");
//     }
//     return(
//         <div>
//             <button onClick={()=>message()}>Mee</button>
//         </div>
//     );
// }
// export default Message;
import { Component } from "react";
class Message extends Component{
   
        Message=()=>{
            alert("hey");
    
}
render(){
    return(
        <div>
            <h1>message: </h1>
                <button onClick={()=>this.message()}>mess</button>
        </div>
    );
}
}

export default Message;