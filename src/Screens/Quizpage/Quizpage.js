import React, { Component } from 'react';
import swal from 'sweetalert';

let quizIndex;
let i = 0; 
var int;
let quizTime;
let questionStartFrom;
class Quizpage extends Component{
    constructor(props){
        super(props)
            this.state= {
                userAnswer : '',
                time : 60
            }
        }

    componentWillMount(){
        let users = JSON.parse((localStorage.getItem("users")))
        quizIndex= localStorage.getItem("selectedQuizIndex")
        let userIndex = localStorage.getItem("userIndex")        
         int =setInterval(()=>{
            let time = this.state.time
            localStorage.setItem("timeLeft" , time)
            this.setState({time : time - 1})
            quizTime = localStorage.getItem("timeLeft")
        },1000)

    }

    render(){
        
        let users = JSON.parse((localStorage.getItem("users")))
        quizIndex= localStorage.getItem("selectedQuizIndex")
        let userIndex = localStorage.getItem("userIndex")
        // console.log(users[userIndex].quizData[quizIndex].completeQuizIndex);

        const {quizQuestions , nextQuestion , index , timeUpFunc , returnToHome} = this.props;
        let {userAnswer , time} = this.state
        let questionIndex = localStorage.setItem("quizIndex" , index)
        questionStartFrom = localStorage.getItem("quizIndex")

        {           
            // if((users[userIndex].quizData[quizIndex].completeQuizIndex !== undefined && users[userIndex].quizData[quizIndex].completeQuizIndex == quizIndex)){
            //     const userScore = users[userIndex].quizData[quizIndex].score
            //     swal("You Completed This Quiz" , `Your Socre ${userScore}` , 'success')
            //     console.log("if");
            //     clearInterval(int)
            //     returnToHome()

            // }
    
            if(time === 0){
                clearInterval(int)
                swal("Sorry" ,"Time's up" , "error" )
                timeUpFunc()
                localStorage.setItem("quizStarted" , false)
            }    
            
            var questions = quizQuestions[quizIndex].questions[questionStartFrom]
            return(
                <div className="jumbotron my-5">
                    <p className="text-right">Time left {quizTime}</p>
                    <h3>{questions.question}</h3>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" value={questions.option1}  class="form-check-input" name="optradio" onChange={(e)=>{this.setState({userAnswer : e.target.value})}} />{questions.option1}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" value={questions.option2}  class="form-check-input" name="optradio" onChange={(e)=>{this.setState({userAnswer : e.target.value})}} />{questions.option2}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" value={questions.option3}  class="form-check-input" name="optradio" onChange={(e)=>{this.setState({userAnswer : e.target.value})}} />{questions.option3}
                        </label>
                    </div>
                    <input type="button" value="Next" className="btn btn-success my-2" onClick={()=>{nextQuestion(userAnswer)}} />
                </div>
            )
        }
    }
 }

 export default Quizpage;