import React, { Component } from 'react';
import './Quizzes.css';

class Quizzes extends Component {
    constructor(props){
        super()
    }
    render(){
       const {quizList ,quizSelect} = this.props
        return(
            <div className ="quiz-box my-2 mx-2">
                <h3>Please Select Any Of Quiz</h3>
                    <ul className="list-group bg-1">
                        {
                            quizList.map((value , index)=>{
                               return <li className="list-group-item" key={index + value.quizName} onClick={()=>{quizSelect(index)}}>{value.quizName}</li>
                            })
                        }

                    </ul>
            </div>
        )
    }
}

export default Quizzes