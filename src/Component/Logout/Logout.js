import React, { Component } from 'react';

class Logout extends Component{
    constructor(props){
        super(props)
    }

    render(){
       const logout = this.props.logoutFunc
        return(
            <div className="text-center my-4">
                <input type="button" value="Logout" className="btn btn-danger" onClick={logout} />
            </div>
        )
    }
}

export default Logout