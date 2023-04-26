import "../Style/UploadPost.css";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadPost = () => {
    const navigate=useNavigate();
  const state = useSelector((state) => state.userReducer);
  const name = state.username;
  const username1=localStorage.getItem("username")
  const userFirstname=localStorage.getItem("firstname")
  const userid=localStorage.getItem("userid")
//   console.log(username1,"username");
  const img ="data:image/jpeg;base64,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"
 
  const [imagestate, setImagestate] = useState(img);
  const [caption, setCaption] = useState(img);

  const postOject={
    caption:caption,
    img_url:imagestate,
    Like:1,
    username:username1,
    userfirstname:userFirstname,
    userid:userid,
  }

 const handleSubmit=(event)=>{
    event.preventDefault();
    const baseURL="http://localhost:5005/uploadpost";
    axios.post(baseURL,{
        postOject
    },
    {
  
       "Content-Type": "application/json",
      
       "Access-Control-Allow-Origin": "*",
      
      }
    ).then(res => {
      console.log(res,"upload response") 
      alert(res.data.msg);
      navigate("/myprofile")
    }).catch((error)=>{
      console.log(error.response.data.msg)
      
      alert(error.response.data.msg)
  })
  


 }

  return (
    <div>
      <Dashboard />
      <div id="wrapper">
        <div className="main-content1">
          <div className="header">
            <h1 className="textItalic">Upload your post here</h1>
          </div>
          <div class="main-gallery-wrapper flex-container">
            {/* Story */}

            <div class="pop-img-container">
              <img src={imagestate} alt="" class="pop-img" />
            </div>
            <p class="pop-text">uploaded by {name}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="l-part">
              <input
                type="text"
                placeholder="Add your caption here"
                className="input-1"
                onChange={(e)=>{setCaption(e.target.value)}}
              />
              <div className="overlap-text">
                <input
                  type="text"
                  placeholder="Add your image url here"
                  className="input-2"
                //   ref={imageRef}
                  onChange={(e)=>{setImagestate(e.target.value)}}
                />
              </div>
              <input type="submit" value="upload" className="btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UploadPost;
