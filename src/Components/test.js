import "../Style/Home.css";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

const Home =()=>{

  const[posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data.posts)); 
},[]);

  console.log("posts",posts[0]);

return(<>
<NavBar/>
<section class="main-content grid">
  <div class="main-gallery-wrapper flex-container">
    
    <div class="card-wrapper flex-container">
      <div class="card-header grid">
        
        <span class="card-title">
          Lorem, ipsum.123
        </span>
        <div class="card-opt-btn flex-container"><i class="bi bi-three-dots"></i></div>
      </div>
      <div class="card-img-container">
              </div>
      <div class="card-data flex-container">
        <div class="card-icons flex-container"> 
        <span className="navbar-item">
        <img src="./heart.png"  alt=""></img>
        </span>
        <span className="navbar-item">
        <img src="./chat.png"  alt=""></img>
        </span>
        </div>
        <span class="bold card-text">701 Likes</span>
    
        </div>
        
      </div>
  
    </div>
</section>


</>);
}
export default Home;


<section class="main-content grid">
  <div class="main-gallery-wrapper flex-container">
    
    <div class="card-wrapper flex-container">
      <div class="card-header grid">
        
        <span class="card-title">
          Lorem, ipsum.123
        </span>
        <div class="card-opt-btn flex-container"><i class="bi bi-three-dots"></i></div>
      </div>
      <div class="card-img-container">
              </div>
      <div class="card-data flex-container">
        <div class="card-icons flex-container"> 
        <span className="navbar-item">
        <img src="./heart.png"  alt=""></img>
        </span>
        <span className="navbar-item">
        <img src="./chat.png"  alt=""></img>
        </span>
        </div>
        <span class="bold card-text">701 Likes</span>
    
        </div>
        
      </div>
  
    </div>
</section>


<BrowserRouter>
<Provider store={store}>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/home" element={<Home />} />
  <Route path="/logout" element={<Logout />} />
  <Route path="/myprofile/:id" element={<MyProfile />} />
</Routes>
</Provider>
</BrowserRouter>










<div>
        
        {post.map((post) => {
          return (
            <section className="main-content grid">
              <div className="main-gallery-wrapper flex-container">
                <div className="card-wrapper flex-container">
                  <div className="card-header grid">
                    <span className="card-title">
                      <h3>{post.title}</h3>
                    </span>
                  </div>
                  <div className="card-title">
                    <p className="card-text fw-bolder">{post.body}</p>
                  </div>
                  <div class="card-data flex-container">
        <div class="card-icons flex-container"> 
        <span className="navbar-item">
        {/* <img src="./heart.png"  alt=""></img> */}
        <ThumbUpSharp sx={{fontSize:30}}/>
        </span>
        <span className="navbar-item">
        {/* <img src="./chat.png"  alt=""></img> */}
        <ChatBubbleSharp sx={{fontSize:30}}/>
        </span>
        </div>
        <span class="bold card-text">{post.reactions} Likes</span>
    
        </div>
        
      </div>
  
    </div>
</section>
          );
        })}
      </div>
    