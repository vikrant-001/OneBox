import { useState } from "react"
import AuthContext from "./AuthContext";
const ContextProvider = (props) => {
    const [login,setLogIn] = useState(true);
    const logoutHandler = () => {
        setLogIn(false);
        localStorage.removeItem('token');
    }

    const loginHandler = (token) =>{
        setLogIn(true);
        localStorage.setItem('token',token);
        
    }

    const auth = {
        isLogin:login,
        userLogin:loginHandler,
        userLogout:logoutHandler,
    }

    return <AuthContext.Provider value={auth}>
        {props.children}
    </AuthContext.Provider>
}

export default ContextProvider;