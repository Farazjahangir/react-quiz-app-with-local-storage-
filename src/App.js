import React, { Component } from 'react';
import swal from 'sweetalert';

import Header from './Component/Header/Header'
import Logout from './Component/Logout/Logout'

import Signup from './Screens/Signup/Signup'
import Login from './Screens/Login/Login'
import Quizzes from './Screens/Quizzes/Quizzes'
import Quizdetails from './Screens/Quizdetails/Quizdetails'
import Protect from './Screens/Protect/Protect'
import Quizpage from './Screens/Quizpage/Quizpage'

var userScore = 0;

const quizList = [
  {
    quizName : "Html 5" , 
    totalQustions : 5,
    totalScore : 5,
    questions : [
      {
        question : "What does HTML stand for?",
        option1 : "Hyper Text Markup Language",
        option2 : "Home Tool Markup Language",
        option3 : "Hyperlinks and Text Markup Language ",
        correctAnswer : "Hyper Text Markup Language"
      },
      {
        question : "Choose the correct HTML element for the largest heading?",
        option1 : "<head>",
        option2 : "<h1>",
        option3 : "<h6>",
        correctAnswer : "<h1>"
      },
      {
        question : "What is the correct HTML element for inserting a line break?",
        option1 : "<lb>",
        option2 : "<break>",
        option3 : "<br>",
        correctAnswer : "<br>"
      },
      {
        question : " What is the correct HTML for creating a hyperlink?",
        option1 : "<a url='http://www.google.com'>google</a>",
        option2 : "<a href='http://www.google.com'>google</a>",
        option3 : "<a name='http://www.google.com'>google</a>",
        correctAnswer : "<a href='http://www.google.com'>google</a>"
      },
      {
        question : "Choose the correct HTML element to define important text",
        option1 : "<i>",
        option2 : "<important>",
        option3 : "<strong>",
        correctAnswer : "<strong>"
      }
    ]
  },
  {quizName : "Css 3", 
  totalQustions : 5,
  totalScore : 5,
  questions : [
    {
      question : "What does CSS stand for?",
      option1 : "Colorful Style Sheets",
      option2 : "Cascading Style Sheets",
      option3 : "Hyper Text Markup Language",
      correctAnswer : "Cascading Style Sheets"
    },
    {
      question : " What is the correct HTML for referring to an external style sheet?",
      option1 : "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
      option2 : "<stylesheet>mystyle.css</stylesheet>",
      option3 : "<style src='mystyle.css'>",
      correctAnswer : "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
    },
    {
      question : "Which is the correct CSS syntax?",
      option1 : "{body;color:black;}",
      option2 : "body {color: black;}",
      option3 : "{body:color=black;}",
      correctAnswer : "body {color: black;}"
    },
    {
      question : " Where in an HTML document is the correct place to refer to an external style sheet?",
      option1 : "At the end of the document",
      option2 : "In the <body> section",
      option3 : "In the <head> section",
      correctAnswer : "In the <head> section"
    },
    {
      question : "Which property is used to change the background color?",
      option1 : " background-color",
      option2 : "color",
      option3 : "bgcolor",
      correctAnswer : " background-color"
    }
  ]
},
  {
    quizName : "Javascript", 
    totalQustions : 5,
    totalScore : 5,
    questions : [
      {
        question : "Inside which HTML element do we put the JavaScript?",
        option1 : "<script>",
        option2 : "<javascript>",
        option3 : "<scripting>",
        correctAnswer : "<script>"
      },
      {
        question : "What is the correct JavaScript syntax to change the content of the HTML element? (<p id='demo'>This is a demonstration.</p>)",
        option1 : "#demo.innerHTML = 'Hello World!';",
        option2 : "document.getElementById('demo').innerHTML = 'Hello World!';",
        option3 : "document.getElement('p').innerHTML = 'Hello World!';",
        correctAnswer : "document.getElementById('demo').innerHTML = 'Hello World!';"
      },
      {
        question : "Where is the correct place to insert a JavaScript?",
        option1 : "The <body> section",
        option2 : "The <head> section",
        option3 : "Both the <head> section and the <body> section are correct",
        correctAnswer : "Both the <head> section and the <body> section are correct"
      },
      {
        question : " How do you write 'Hello World' in an alert box?",
        option1 : "alert('Hello World');",
        option2 : "alertBox('Hello World');",
        option3 : "msg('Hello World');",
        correctAnswer : "alert('Hello World');",
      },
      {
        question : "How do you create a function in JavaScript?",
        option1 : "function:myFunction()",
        option2 : "function = myFunction()",
        option3 : " function myFunction()",
        correctAnswer : " function myFunction()"
      }
    ]
  },
]
class App extends Component {
  constructor(props){
    super()
      this.state = {
        signUpForm : false,
        signInForm : true,
        isLogin : false,
        quizDetails : false,
        protectkeyPage : false,
        quizPage : false,
        authenticateKey : 12345,
        i : 0,
        users: [],
      }
      
      
      this.showSignupForm = this.showSignupForm.bind(this)
      this.showSigninForm = this.showSigninForm.bind(this)
      this.signUp = this.signUp.bind(this)
      this.signIn = this.signIn.bind(this)
      this.quizSelect = this.quizSelect.bind(this)
      this.startQuiz = this.startQuiz.bind(this)
      this.submitKey = this.submitKey.bind(this)
      this.nextQuestion = this.nextQuestion.bind(this)
      this.logout = this.logout.bind(this)
      this.timeUp = this.timeUp.bind(this)
    }
    showSignupForm(){
      this.setState({signUpForm : true , signInForm : false})
    }
    showSigninForm(){
      this.setState({signInForm : true , signUpForm : false})
    }

    signUp(email , password , userName) {
        let {users} = this.state
      let user = {
          userName,
          email,
          password 
      }
      
      if(email === "" || password === "" || userName === ""){
        swal("Please Fill All The Fields")
        return false
      }
      if(password.length < 6){
        swal("Password Should Be 6 Characters long")
        return false
      }
      if(localStorage.getItem("users") !== null){
         users = JSON.parse(localStorage.getItem("users" , users));
      }
      users.push(user)
      localStorage.setItem("users" , JSON.stringify(users))
      this.setState({isLogin  : true , signUpForm : false})
      localStorage.setItem("isUser" , true)
      swal("Congratulations" , "You Have Successfully Created Your Account" , "success")
      
  }



    signIn(email , password) {
      let userFound = false     
      if(email === ""){
        swal("Email Is Required")
        return false
      }
      if(password === ""){
        swal("Password Is Required")
        return false
      }

      let usersArr = JSON.parse(localStorage.getItem("users"))
      if(usersArr === null){
        swal("Error" , "Wrong Email or Password" , "error")
        return false
      }
      usersArr.map((value)=>{
          if(email === value.email && password === value.password){
              this.setState({isLogin : true , signInForm : false})
              localStorage.setItem("isUser" , true)
              userFound = true
          }   
        })
        if(!userFound){
          swal("Error" , "Wrong Email or Password" , "error")
      }
    }

    logout(){
      localStorage.removeItem("isUser")
      this.setState({
        isLogin : false,
        quizDetails : false,
        protectkeyPage : false,
        quizPage : false,
        signInForm : true
      })
    }
    quizSelect(quizIndex){      
      localStorage.setItem("selectedQuizIndex" , quizIndex)
      this.setState({isLogin : false , quizDetails : true})
    }

    startQuiz(){
      this.setState({protectkeyPage : true , quizDetails : false})
    }
    submitKey(key){
      const {authenticateKey} = this.state
      if(authenticateKey == key){
        this.setState({protectkeyPage : false , quizPage : true})
      }
      else{
        swal("Error" , "Wrong Key" , "error")
      }
    }
    nextQuestion(ans){
      let { i } = this.state
      var quizIndex = localStorage.getItem("selectedQuizIndex")      
      if(quizList[quizIndex].questions[i].correctAnswer === ans){
        userScore = userScore + 1 ;
      }
      localStorage.setItem("quizNo" , i);
      i = i + 1;
      
      if(quizList[quizIndex].questions.length !== i){
        this.setState({i})  
      }
      else{
        swal("Quiz Complete" , "Your Score " + userScore , "success")
        this.setState({quizPage : false , isLogin : true , i: 0})
        userScore = 0;
      }
    }

    timeUp(end){
      this.setState({quizPage : false , isLogin : true})   
    }

    componentWillMount(){
      if(localStorage.getItem("isUser")){
        this.setState({isLogin : true , signInForm : false , signUpForm : false})
      }
    }
    
    render() {
      const { isLogin, 
              signUpForm, 
              signInForm, 
              quizDetails, 
              protectkeyPage, 
              quizPage,
              i,
              err
            } = this.state
    return (
      <div>
        <Header />
        {signUpForm && <Signup showSigninForm = {this.showSigninForm} signUpFunc ={this.signUp}/>}
        {signInForm &&  <Login showSignupForm = {this.showSignupForm} signInFunc ={this.signIn} err={err} />}
        {!signInForm && !signUpForm && <Logout logoutFunc={this.logout} />}
        {isLogin && <Quizzes quizSelect ={this.quizSelect} quizList = {quizList} />}
        {quizDetails && <Quizdetails quizList={quizList} startQuiz={this.startQuiz} />}
        {protectkeyPage && <Protect submitKeyFunc={this.submitKey} />}
        {quizPage && <Quizpage quizQuestions = {quizList} index={i} nextQuestion={this.nextQuestion} timeUpFunc={this.timeUp} />}
      </div>
    );
  }
}

export default App;
