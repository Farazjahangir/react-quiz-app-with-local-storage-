import React, { Component } from 'react';
import swal from 'sweetalert';

let quizIndex;
let i = 0; 
var int;
class Quizpage extends Component{
    constructor(props){
        super(props)
            this.state= {
                userAnswer : '',
                time : 60
            }
        }

    componentWillMount(){
        quizIndex= localStorage.getItem("selectedQuizIndex")
         int =setInterval(()=>{
            let time = this.state.time
            this.setState({time : time - 1})
        },1000)

    }

    render(){
        const {quizQuestions , nextQuestion , index , timeUpFunc} = this.props;
        let {userAnswer , time} = this.state
        {           
            if(time === 0){
                clearInterval(int)
                swal("Sorry" ,"Time's up" , "error" )
                timeUpFunc()
            }           
        }
        var questions = quizQuestions[quizIndex].questions[index]
        
        return(
            <div className="jumbotron my-5">
                <p className="text-right">Time left {time}</p>
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

 export default Quizpage;