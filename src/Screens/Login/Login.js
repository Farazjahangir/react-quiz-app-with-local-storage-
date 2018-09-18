import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props)
        console.log("Signin " ,props);
        
        this.state = {
            email : '',
            password : ''
        }
    }

    render() {
       const {showSignupForm , signInFunc} = this.props
       const {email , password} = this.state
        return( 
        <div>
            <h2 className="text-center my-1">Sign In To Your Account</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" value ={email} className="form-control" id="email" onChange={(e)=>{this.setState({email : e.target.value})}} />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" value={password} className="form-control" id="pwd" onChange={(e)=>{this.setState({password : e.target.value})}} />
                </div>   
                <div className="form-group">
                <input type="Button" value="SignIn" className="btn btn-danger mx-1" onClick={()=>{signInFunc(email , password)}} />    
                <input type="button" value="Signup" className="btn btn-success" onClick={showSignupForm} />    
                </div>
            </form>
        </div>
    )
    }
}
export default Login;