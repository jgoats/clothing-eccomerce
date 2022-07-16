import React from "react";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocument } from "../utils/firebase/firebase.utils.js";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

// the value object gets passed into the value field so that any child of userContext can access it.
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocument(user);
            }
            setCurrentUser(user);
            console.log(user);
        });
        /* returns the result of the onAuthStateChangedListener
        when the useEffect has finished running. The Observer will normally keep observing
        the entire runtime unless this function is returned out. it will also keep the
        authentication info alive even after a page refresh */
        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}