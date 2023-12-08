import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = (props) => {
    const [user, setUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Gem user i lokal state, kører når komponentet mounter
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsLoggedIn(true)
    }
  }, []);

  // Funktion til at gemme user data der kommer tilbage fra API´et
  const saveUserData = (_data) => {
    localStorage.setItem("user", JSON.stringify(_data));
    setIsLoggedIn(true);
    setUser(_data)
  };

    // Her kan vi have alle vores states og funktioner vi vil dele
    return(
        <UserContext.Provider 
        value={{
            user,
            setUser,
            isLoggedIn,
            setIsLoggedIn,
            saveUserData
        }}>
            {props.children}
        </UserContext.Provider>
    )
}