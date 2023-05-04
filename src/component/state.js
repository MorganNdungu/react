const functional component=()=>{
    const [name, setname]=usestate('john');
    return(
        <div>
            <h1>functional component</h1>
            {name};
        </div>
    );
}
export default functional component;