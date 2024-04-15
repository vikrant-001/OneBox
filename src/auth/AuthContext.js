import React from "react";
const AuthContext = React.createContext({
    isLogin : false,
    userLogin : (token) => {},
    userLogout: () => {},
})

export default AuthContext