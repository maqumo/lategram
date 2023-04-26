const initialState = {
    username: "",
    userid:""
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        console.log(action,"from user action");
        return { ...state, username: action.payload.username,userid:action.payload.userid };
      default:
        return state;
    }
  };
  
  export default userReducer;
  