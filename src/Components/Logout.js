
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Logout=()=>{
    const navigate=useNavigate();
useEffect(()=>{
    console.log("logged out working");
    localStorage.setItem("auth",false);
    localStorage.removeItem("ACCESS_TOKEN");
    console.log(localStorage.getItem("auth"));

      navigate("/");
    // window.location.href="/";
},[]);
   
}
export default Logout;