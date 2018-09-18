import React, { Component } from 'react';
import "./Protect.css"
class Protect extends Component{
    constructor(props){
        super(props)
            this.state = {
                key : ''
            }
        }

    render(){
        const {submitKeyFunc} = this.props
        const {key} = this.state
        return(
            <div className="input-group my-5 border">
                <input type="password" value={key} placeholder="Enter Proctoring Key" className="form-control" onChange={(e)=>{this.setState({key : e.target.value})}} />
                <input type="button" value="Submit" className="btn btn-danger" onClick={()=>{submitKeyFunc(key)}} />
            </div>
        )
    }
    }

export default Protect