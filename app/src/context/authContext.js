import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //tbd
    setCurrentUser({id:1, name:'John Smith', profilePic:"https://images.pexels.com/photos/5935229/pexels-photo-5935229.jpeg"})
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login}}>
      {children}
    </AuthContext.Provider>
  );
};
