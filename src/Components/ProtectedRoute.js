import axios from "axios";
import { useEffect, useState } from "react";
import {Navigate,Outlet} from "react-router-dom";
// function isAuthenticated() {
//     const auth=localStorage.getItem("auth")    
//     console.log("Proteceted working")
//     return auth;   

// } 
const ProtectedRoute=()=>{

   const [userdata,setUser]=useState({})


   useEffect(()=>{
     axios.get("http://localhost:5005/verifytoken",{
        headers:{
            "accesstoken":localStorage.getItem("ACCESS_TOKEN"),
             "Content-Type":"application/json",
             Accept:"application/json",
             "Acess-Control-Allow-Origin":"",

        }
     }).then((res)=>{
      //   console.log(res,"acesssss")
        setUser(res.data.result)
     }).catch(function(error){
        setUser(null)
     });
   },[])

    // const auth =isAuthenticated();
    return(
        // auth==='true'?
     userdata!==null?
     
     <Outlet/>
   :
   <>{
    alert("Please Login in First")}
<Navigate to='/'/>
   
   </>
  )
   
}
export default ProtectedRoute;