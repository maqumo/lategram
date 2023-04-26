import "../Style/Login.css";
import { useRef,React,useEffect } from 'react';
import { useNavigate ,Link} from "react-router-dom";
import { addUser } from "../Redux/Action/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
const Login = () => {

const usernameRef = useRef(null);
const passwordRef = useRef(null);
const navigate = useNavigate();
const state=useSelector((state)=>state.userReducer);
const dispatch=useDispatch();

// const handleSubmit = (event) => {
//     event.preventDefault();
// 	const username = usernameRef.current.value;
// 	const password = passwordRef.current.value;
//   //   fetch('https://dummyjson.com/auth/login', {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify({ username,password,
// 	// })
//   //   })
//   //   .then(res => res.json())
// 	// .then(res => {
		
// 	// 	if (res.username === `${username}`) {
// 	// 	  // Credentials match, navigate to dashboard
//   //     const userid =res.id;
// 	// 	 alert('login success');
//   //    console.log("Response---:",userid)
//   //    const user={
//   //     username:username,
//   //     userid:userid
//   //    }
//   //    dispatch(addUser(user));
//   //    localStorage.setItem("auth",true)
// 	// 	navigate("/home");

// 	// 	} else {
// 	// 	  // Credentials don't match, show error message
// 	// 	  alert('Invalid username or password');
// 	// 	}
// 	//   });

//   const baseURL="https://dummyjson.com/auth/login";
//   axios.post(baseURL,{
      
//         username:username,
//         password:password
//   }).then(res => {
// 		console.log(res.data.username,"rishikaaaa")
// 		if (res.data.username === `${username}`) {
// 		  // Credentials match, navigate to dashboard
//       const userid =res.data.id;
// 		 alert('login success');
//      console.log("Response---:",userid)
//      const user={
//       username:username,
//       userid:userid
//      }
//      dispatch(addUser(user));
//      localStorage.setItem("auth",true)
// 		navigate("/home");

// 		} else {
// 		  // Credentials don't match, show error message
// 		  alert('Invalid username or password12');
// 		}

//   }
//   ).catch((error)=>{
//     alert('Invalid username or password12');
//         console.log(error.response.data.status)
//   })
  
// 	}

//node api login

const handleSubmit = (event) => {
  event.preventDefault();
const username = usernameRef.current.value;
const password = passwordRef.current.value;

const baseURL="http://localhost:5005/login";
axios.post(baseURL,{
      
      username:username,
      passward:password
},
{

   "Content-Type": "application/json",
  
   "Access-Control-Allow-Origin": "*",
  
  }
).then(res => {
  console.log(res)
  console.log(res.data.result.username,"rrrrrr")
  const user={
          username:res.data.result.firstName,
          userid:res.data.result._id
         }
         dispatch(addUser(user));
         localStorage.setItem("auth",true)
         localStorage.setItem("ACCESS_TOKEN",res.data.generatedtoken)
         localStorage.setItem("username",res.data.result.username)
         localStorage.setItem("firstname",res.data.result.firstName)
         localStorage.setItem("userid",res.data.result._id)
  alert('login sucess');
  navigate("/home");	
}).catch((error)=>{
  console.log(error.response.data.msg)
  
  alert(error.response.data.msg)
})

}

  return (

    <div id="wrapper">
      <div className="main-content1">
        <div className="header">
         <h1 className="textItalic">  LateGram</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="l-part">
          <input type="text" placeholder="Username" className="input-1" ref={usernameRef} />
          <div className="overlap-text">
            <input type="password" placeholder="Password" className="input-2" ref={passwordRef} />
          </div>
          <input type="submit" value="Log in" className="btn" />
        </div>
        </form>
        
        <div className="s-part">
          {/* Don't have an account?<a href="#">Sign up</a> */}
          Don't have an account?<Link to='/signup'>Sign up</Link>
        </div>
      </div>
    </div>
 
  );
};
export default Login;
