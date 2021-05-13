import React, {useState, useEffect, createContext } from 'react';
import { auth } from '../firebase';
export const UserContext = createContext({ user:null });

function User() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            const { displayname, email } = user;
            setUser({
                displayname,
                email
            });
        });
    },[]);
    return (
        <div>
            <UserContext.Provider value={user}>
               {props.children}
            </UserContext.Provider> 
        </div>
    );
}

export default User;
