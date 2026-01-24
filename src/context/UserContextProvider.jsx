import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    return (
        //Provider ka kaam hai: jo bhi value tum pass karte ho ({ user, setUser }),
        //wo context ke consumer components ko available ho jata hai bina props drilling ke.
        <UserContext.Provider value={{ user, setUser }}>
            {children}  
        </UserContext.Provider>
    );
};

export default UserContextProvider;

/*
consumer side 

Ab koi bhi component me tum useContext(UserContext) use karke user aur 
setUser ko access kar sakte ho:- React Context object(userContext.js)


 */