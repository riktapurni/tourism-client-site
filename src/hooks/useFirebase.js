import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

// google handler
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //Log out handler
    const logOut =() => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
        setUser({});
        })
        .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            setIsLoading(false);
        })
    }, []);
    return {user, signInUsingGoogle, logOut, isLoading }
}
export default useFirebase;
