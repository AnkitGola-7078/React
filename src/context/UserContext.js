import React from "react";
//ek context object ban gaya jo global data share karne ke liye use hota hai.
const UserContext=React.createContext();//- createContext() ek container banata hai jisme tum data store kar sakte ho.- Ye container ke andar ek Provider aur ek Consumer hota hai.


export default UserContext;

//- Context ka kaam hai: global data store provide karna jise
//  tumhare app ke multiple components bina props pass kiye access kar sakte hain.


