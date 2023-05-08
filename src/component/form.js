import { Component } from "react";
class Form extends Component{
    state={
        firstname:"",
        lastname:""
    }
    handleChange=(event)=>{
        this.setState({
            firstname:event.target.value,
        })
    }
    handle=(event)=>{
        this.setState({
            lastname:event.target.value,
        })
    }
    handleSubmit=(event)=>{
    event.preventDefault();
    console.log({
        fname:this.state.firstname,
                lname:this.state.lastname

    })
}
// handledeliver=(event)=>{
//     event.preventDEfault();
//     console.log({
//         lname:this.state.lasttname

//     })
// }
    render(){
        return(
            <div>
            <h1>form</h1>
            <form onSubmit={this.handleSubmit}>

            <input type="text" value={this.state.firstname} onChange={this.handleChange} /><br></br>
            <input type="text" value={this.state.lastname} onChange={this.handle}/><br></br>

            <button type="submit">SubMit</button>
            <button type="reset">clear</button>
            <p>{this.state.firstname}</p>
            <p>{this.state.lastname}</p>


            </form>
            </div>
        )
        }       
}
export default Form;
