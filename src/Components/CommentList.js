import "../Style/ComentList.css";
import NavBar from "./NavBar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CommentList =()=>{
  const [commentlist,setCommentList]=useState([]);
  const [img,setImg]=useState();
  const { id } = useParams();
  //console.log(id,"git the od")
  useEffect(() => {
    const baseURL = `http://localhost:5005/getcomment/${id}`;
    axios.get(baseURL,{
      headers:{
         "Content-Type":"application/json",
         Accept:"application/json",
         "Acess-Control-Allow-Origin":"",
    
    }
    }).then(res => {
    // console.log(res)
    console.log(res.data,"post result")
    const local = res.data.comment;
    setCommentList(local);
    setImg(res.data.img_url);
    
    
    }).catch((error)=>{
    console.log(error)
    
    // alert(error.response.data.msg)
    })  
  
  }, []);



return(<>
<NavBar/>
<div id="wrapper1">
        <div className="main-content1">
          <div className="header1">
            <h1 className="textItalic1">Comments on your post</h1>
            <div class="main-gallery-wrapper1 flex-container1">
            <div class="pop-img-container1">
              <img src= {img} alt="" class="pop-img" />
            </div>
          </div>
            {commentlist.map((item)=>{
              console.log(item)
              return(
                <div className="padding">
            <p>{item.comment}<p></p> by {item.username}</p>
            <div className="seperator"></div>
            </div>
              )
            })}
            
          </div>
          
            </div>
        </div>
</>);
}
export default CommentList;