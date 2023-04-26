import "../Style/Home.css";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import {FavoriteRounded,ChatBubbleSharp,SendRounded} from '@mui/icons-material';
import axios from "axios";
import { IconButton } from '@mui/material';

import { Link, useParams } from "react-router-dom";

const Home =()=>{

  const[posts,setPosts]=useState([]);
  const [like,setLike]=useState();
  const[isliked,setisliked]=useState(false);
  const [comment, setComment] = useState(null);
  const userid = localStorage.getItem("userid");
  const username = localStorage.getItem("username");

  //dummy json api
//   useEffect(()=>{
//     fetch('https://dummyjson.com/posts')
//     .then(res => res.json())
//     .then(data => setPosts(data.posts)); 
// },[]);

  // console.log("posts",posts[0]);

//node api
useEffect(() => {
  const baseURL="http://localhost:5005/getallpost";
axios.get(baseURL,{
  headers:{
     "Content-Type":"application/json",
     Accept:"application/json",
     "Acess-Control-Allow-Origin":"",

}
}).then(res => {
// console.log(res)
console.log(res.data,"post result")
const local=res.data
setPosts(local)

}).catch((error)=>{
console.log(error)

// alert(error.response.data.msg)
})
},[like]);



const onlike=(id)=>{
  if(!isliked){
    
   const baseURL="http://localhost:5005/likepost";
   axios.post(baseURL,{
     postid:id
   },
   {
   
      "Content-Type": "application/json",
     
      "Access-Control-Allow-Origin": "*",
     
     }
   ).then(res => {
     console.log(res.data.Like,"like response")
   setLike(res.data.Like)
   setisliked(true)
   }).catch((error)=>{
     console.log(error)
     
   })


  }else{
   alert("Already Liked")
  }
      }

      const oncomment = (id) => {
        const addComments = document.getElementById('add-comments');
        console.log(addComments,"add Comments")
        addComments.value="";
        const baseURL = `http://localhost:5005/postcomment/${id}`;
        axios
          .put(
            baseURL,
            {
              userid: userid,
              username: username,
              comment: comment,
            },
            {
              "Content-Type": "application/json",
    
              "Access-Control-Allow-Origin": "*",
            }
          )
          .then((res) => {
            console.log(res, "comment response");
         
          })
          .catch((error) => {
            console.log(error);
          });
      };
    


return(<div>
<Dashboard/>
<div>
        
        {posts.map((item) => {
          // console.log(item,"item")
          return (
            <section className="main-content grid">
              <div className="main-gallery-wrapper flex-container">
                <div className="card-wrapper flex-container">
                  <div className="card-header grid">
                    <span className="card-title">
                      {/* <h3>{item.caption}</h3> */}
                      <h3 style={{textAlign:"center"}}>Post By {item.userFirstname}</h3>
                    </span>
                  </div>
                  <div className="card-title">
                  <div class="card-img-container">
                    {/* <p className="card-text fw-bolder">{post.body}</p> */}
                    <img class="card-img" src={item.img_url} alt="" ></img>
                  </div>
          <h5> caption:{item.caption}</h5> 
                  
                  <div class="card-data flex-container">
        <div class="card-icons flex-container">
        <span className="navbar-item">
        {/* <img src="./heart.png"  alt=""></img> */}
        <IconButton  onClick={()=>onlike(item._id)}><FavoriteRounded className="likebtn" sx={{fontSize:30}}/></IconButton>
       
        </span>
        <span className="navbar-item">
        
        {/* <img src="./chat.png"  alt=""></img> */}
        <IconButton>
                         {/* <Link to="/commentlist/:id"> <ChatBubbleSharp  sx={{ fontSize: 30 }} /></Link> */}
                         <Link to={`/commentlist/${item._id}`}> <ChatBubbleSharp  sx={{ fontSize: 30 }} /></Link>
                        </IconButton>
        </span>
        </div>
        <span class="bold card-text">{item.Like} Likes</span>

        <div className="add-comment-container flex-container">
                      <span className="card-icon">
                        <i className="bi bi-emoji-smile"></i>
                      </span>
                      <div className="comment-container">
                        <input
                        id="add-comments"
                          className="comment-input"
                          type="text"
                          placeholder="Add a comment...."
                         
                          onChange={(e)=>{setComment(e.target.value)}}
                        />
                        <IconButton  type='submit'onClick={() => oncomment(item._id,)} >
                        <SendRounded sx={{ fontSize: 30 }}/>
                        </IconButton>
                        </div>
                        </div>
               
        </div>
        
      </div>
      </div>
  
    </div>
</section>
          );
        })}
      </div>
</div>);
}
export default Home;