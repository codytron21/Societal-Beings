//we are wrapping the our complete app.
import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  // user: { "_id": "616baf484afebd3fee06ac44", "username": "rohan", "email": "rohan@gmail.com", "password": "$2b$10$v13gt7iCFyS7HbFWBOeV3OGc.Xhrkc3T.MgPoYzEGCpMZXs1TCBPW", "profilePicture": "persons/1.jpeg", "coverPicture": "", "followers": ["616ba05c83cfffa780227a7b"], "followings": ["616ba05c83cfffa780227a7b"], "isAdmin": false, "createdAt": { "$date": { "$numberLong": "1634447176582" } }, "updatedAt": { "$date": { "$numberLong": "1634613573094" } }, "__v": { "$numberInt": "0" }, "desc": "IM Eternal soul!\"", "city": "Patna", "from": "Patna", "relationship": "1" },
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      // below value is passed in/as children. This value will be made available,which can be accessed from anywhere as we are wrapping the complete app.
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
