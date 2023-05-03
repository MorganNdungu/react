const Message= ()=>{
    let message=()=>{
        alert("he heey");
    }
    return(
        <div>
            <button onClick={()=>message()}>Mee</button>
        </div>
    );
}
export default Message;