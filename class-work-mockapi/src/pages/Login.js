import React from "react";
import { mockApiService } from "../api/services/mockApi/mockApi";
import {useHistory} from "react-router-dom";
import "../styles/Login.scss";

function Login() {
    const[email,setEmail] = React.useState([]);
    const[password,setPassword] = React.useState([]);
    const[users,setUsers] = React.useState([]);
    // const[userDetail,setUserDetail] = React.useState([]);
    
    const handleEmailChanged =(e)=>{
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlePasswordChanged =(e)=>{
        e.preventDefault();
        setPassword(e.target.value)
    }
    // const newDetails = {email:email,password:password};
    const history = useHistory();
    const getLoginInfo =(e)=>{
        e.preventDefault();
        // setUserDetail([newDetails]);
        for (let u= 0; u< users.length; u++) {
            if (users[u].email===email && users[u].password===password) {
                return history.push("/");
            }
            else{
                document.querySelector(".errorLogin").innerText = "invalid credentials";
                break;
            }
        }
    }
    //get users and check 
    React.useEffect(()=>{
        mockApiService.getAllUsers()
        .then(({data})=>setUsers(data));
    },[])

  return (
    <div className="form-container">
        <div className="form">
     <form id="login-form" onSubmit={getLoginInfo} >
         <input type="email" name="email" placeholder="EMAIL" onChange={handleEmailChanged} value={email}/>
         <input type="password" placeholder="PASSWORD" name="password" onChange={handlePasswordChanged} required value={password} />
         <button className="login-btn" type="submit">Login</button>
         <div className="errorLogin text-danger"></div>
     </form>
    </div>
    </div>
  );
}

export default Login;
