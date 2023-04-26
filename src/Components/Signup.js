import "../Style/Signup.css";
import { useRef } from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
const Signup =()=>{

const emailRef = useRef(null);
const firstnameRef = useRef(null);
const lastnameRef = useRef(null);
const usernameRef = useRef(null);
const passwardRef = useRef(null);
const navigate=useNavigate();

const handleSubmit=(event)=>{
    

    event.preventDefault();
    const email =emailRef.current.value;
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const username = usernameRef.current.value;
	const password = passwardRef.current.value;


    const baseURL="http://localhost:5005/signup";
  axios.post(baseURL,{
        email:email,
        firstName:firstname,
        lastName:lastname,
        username:username,
        passward:password
  },
  {

     "Content-Type": "application/json",
    
     "Access-Control-Allow-Origin": "*",
    
    }
  ).then(res => {
    console.log(res)
		alert('signed up successfully please login to continue');
    navigate("/");	
  }).catch((error)=>{
    console.log(error.response.data.msg)
    
    alert(error.response.data.msg)
})

}

return(
   
    <main>
    <div className="page">
        <div className="header">
          <h1 className="logo">LateGram</h1>
          <p>Sign up to connect with your friends.</p>
          
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder=" Email" ref={emailRef} required/>
            <input type="text" placeholder="First Name" ref={firstnameRef} required/>
            <input type="text" placeholder="Last Name" ref={lastnameRef} required/>
            <input type="text" placeholder="Username" ref={usernameRef} required/>
            <input type="password" placeholder="Password" ref={passwardRef} required/>
            <button type="submit">Sign up</button>
          </form>
          
        </div>
    </div>
    <div className="option">
       {/* <p>Have an account? <a href="">Log in</a></p> */}
       <p>Have an account? <Link to='/'>Log in</Link></p>
    </div>
 
    
  </main>

)
}
export default Signup;
