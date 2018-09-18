import React, { Component } from 'react';
let quizIndex;
class Quizdetails extends Component{
    constructor(props){
        super(props)
        }

        componentWillMount(){
           quizIndex= localStorage.getItem("selectedQuizIndex")
        }
    render(){
        
        const {quizList , startQuiz} = this.props
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Quiz Name</th>
                            <th>Total Questions</th>
                            <th>Total Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{quizList[quizIndex].quizName}</td>
                            <td>{quizList[quizIndex].totalQustions }</td>
                            <td>{quizList[quizIndex].totalScore }</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center">
                    <input type="button" value="Start Quiz" className="btn btn-success" onClick={startQuiz} />
                </div>
            </div>
        )
    }
}

export default Quizdetails