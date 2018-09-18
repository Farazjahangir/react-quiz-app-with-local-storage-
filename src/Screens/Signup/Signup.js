import React, { Component } from 'react'
// import './Signup.css';


class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName : '',
            email : '',
            password : '',
        }
    }
    render() {
        const {userName ,email , password } = this.state
        const {signUpFunc ,showSigninForm} = this.props
        return (
            <div>
                <h2 className="text-center my-1">Sign up</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" value={userName} className="form-control" id="username" onChange={(e)=>{this.setState({userName : e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" value={email} className="form-control" id="email" onChange={(e)=>{this.setState({email : e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" value={password} className="form-control" id="pwd" onChange={(e)=>{this.setState({password : e.target.value})}} />
                    </div>
                    <input type="button" value="Submit" className="btn btn-danger mx-1" onClick={()=>{signUpFunc(email , password , userName)}} />
                    <input type="button" value="SignIn" className="btn btn-primary" onClick={showSigninForm} />
                </form>
            </div>
        )
    }
}

export default Signup;