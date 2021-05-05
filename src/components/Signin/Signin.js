import React from 'react'
import 'tachyons'
import {Link}  from 'react-router-dom';
import './Signin.css'
import history from './../history';


class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            signInEmail:'',
            signInPassword:'',
            invalidUser:false          
        }
    }
  
    onEmailChange = (event) =>{
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value})
    }
    onSubmitSignin = (event) =>{
        console.log(this.state);
        fetch('http://localhost:3001/signin',{
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify({
             email: this.state.signInEmail,
             password: this.state.signInPassword
            })
        })
        .then(response=> response.json())
        .then(data =>
            {if(data==='fail')
             {                
                this.setState({invalidUser:true})
                console.log(this.state.invalidUser + "invalidUser")
                this.props.parentCallback(false);
                event.preventDefault();
               
            }else{
            this.setState({invalidUser:false})
            this.props.parentCallback(true);
           // event.preventDefault();
            history.push('/shop');
            history.go(0);
            }
            // data==='fail'?  (this.props.invalidUser(true)):(this.props.invalidUser(false))
        })
    }


    render () {
        return(
            <article className="br2 ba b--light-blue dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="ba pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" name="password"  
                            id="password"
                            onChange={this.onPasswordChange}/>
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                        </fieldset>
                
                        <div className="">
                        <input 
                        onClick={this.onSubmitSignin} value="Sign in"
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit"/>
                        </div>
                        <div className="lh-copy mt3">
                        <Link to="/register" className='register'>
                            <p className="f6 link dim black db pointer">Register</p>
                        </Link>                        
                        </div>
                        {this.state.invalidUser ?
                        <div>
                            <label className="errMsg">Opps!!something went wrong.try again or Register</label>
                        </div>
                        :<div></div>
                        }                   
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;