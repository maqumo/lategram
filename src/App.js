import './App.css';
import Login from './Components/Login';
 import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import MyProfile from './Components/MyProfile';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import Logout from "./Components/Logout";
import Notification from "./Components/Notification";
import ProtectedRoute from './Components/ProtectedRoute';
import Signup from './Components/Signup';
import UploadPost from './Components/UploadPost';
import CommentList from'./Components/CommentList';
import Photoupload from './Components/Photoupload';
function App() {
  const auth=localStorage.getItem("auth")
  console.log(auth,"-app-")

  
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/commentlist/:id" element={<CommentList />} />
      <Route path="/uploadpost" element={<UploadPost />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/photoupload" element={<Photoupload />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/myprofile/:id" element={<MyProfile />} />
      <Route path="/myprofile" element={<MyProfile />} />
      </Route>
      
    </Routes>
    </Provider>
    </BrowserRouter>
  
  );
}

export default App;
