import './App.css';
import React,{Component} from 'react'
import Navbar from './components/Navbar/Navbar'
import ChatbotStart from './components/Chatbot/ChatbotStart'
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin'
import Shop from './components/Shop/Shop'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import history from './components/history';


class App extends Component{
  constructor(props){
    super(props)
      this.state={       
        isSignedIn:'false'
      };
 
    }

  handleCallback = (childData) =>{
      console.log('childdata'+childData);
      this.setState({isSignedIn: childData})
     // localStorage.setItem("isSignedIn", childData)
     // console.log(localStorage.isSignedIn+' localstorage')
     
  }
 
    render() {
      const {isSignedIn}=this.state;
      console.log('issignedin'+this.state.isSignedIn);
        return (
          <Router history={history}>
            <div className="App">
            <Navbar isSignedIn={isSignedIn}/>
            <ChatbotStart/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route
                path='/signin'
                render={(props) => (
                  <Signin {...props} parentCallback={this.handleCallback}/>                  
                )}/>
              <Route path="/register" component={Register}/>
              <Route path="/shop" component={Shop}/>
              <Route path="/" exact component={Footer}/>
              </Switch>
            </div>
          </Router>
        );
    }
}

export default App;
