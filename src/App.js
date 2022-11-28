//import logo from './logo.svg';
import React , {useState} from 'react';
import './App.css';


function App() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmpassword , setconfirmpassword] = useState('')
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
    const handleConfPasswordChange =(e)=>{
      setconfirmpassword(e.target.value);
    }
    const handleSubmit=(e)=>{
      if(password !==confirmpassword )
      { alert("password Not Match");
    }
    else{
      alert('A form was submitted with Name :"' + name  +'" and Email :"' + email + '"');
      }
      e.preventDefault();
 
    }
       return(
        <div>
            <form onSubmit={(e) => {handleSubmit(e)}}> 
              <label>Name : </label>
              <input type="text" name="name" required onChange={(e) => {handleChange(e)}}/>
              <br/>
              <label>Email :</label>
              <input type="text" email="email" required onChange={(e) => {handleEmailChange(e)}} />
              <br/>
              <label>Password</label>
              <input type="text" password="password" required onChange={(e) => {handlePasswordChange(e)}}/>
              <br/>
              <label>Confirm Password</label>
              <input type="text" confirmpassword="confirmpassword" required onChange={(e) => {handleConfPasswordChange(e)}} />
              <br/>
              <input type="submit" value="Submit"/>
            </form> 
        </div>
       )
}    

export default App;
