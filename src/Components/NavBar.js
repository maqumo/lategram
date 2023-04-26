import "../Style/NavBar.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import {NotificationsActiveRounded,MarkChatUnreadSharp,UploadSharp,InsertEmoticonSharp,LogoutSharp} from '@mui/icons-material';
const NavBar =()=>{
const navigate = useNavigate()
  const state =useSelector((state)=>state.userReducer);
  // const name=state.username;
  const name=localStorage.getItem("firstname")
  const id= state.userid;
 
const onClickMyProfile = (id) =>{
  navigate(`/myprofile/${id}`)
}
return(
    <header className="grid main-header">
    <div className="flex-container header-container">
      <span className="logo logo-nav header-item">
         Welcome , {name}
      </span>
    
    <nav className="header-item main-nav">
      <ul className="navbar flex-container">
        <li className="navbar-item">
         <i className="bi bi-house-door-fill"></i>
        </li>
        <li className="navbar-item">
          {/* <i className="bi bi-send"></i> */}
          <Link to="/home"><HomeSharpIcon sx={{fontSize:40}}/></Link>
        </li>
        <li className="navbar-item">
        <Link to="/photoupload"><MarkChatUnreadSharp sx={{fontSize:30}}/></Link>
        </li>
        <li className="navbar-item">
        <Link to="/notification" ><NotificationsActiveRounded sx={{fontSize:40}}/></Link>
        </li>
        <li className="navbar-item">
        <Link to="/uploadpost"><UploadSharp sx={{fontSize:40}} /></Link>
        </li>
        <li onClick={(e)=>onClickMyProfile(id)} className="navbar-item no-hover">
        {/* <Link to={`/myprofile/${id}`}> lonclcik={(e)=>function(id)} */}
        <InsertEmoticonSharp sx={{fontSize:40}} />
        {/* </Link> */}
        </li>
        <li className="navbar-item">
        <Link to="/logout" >
        <LogoutSharp sx={{fontSize:40}}/>
          </Link>
        </li>
      </ul> 
    </nav>
    </div>
  </header>
  
  
);
}
export default NavBar;