
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut, updateProfile } from "firebase/auth";


import axios from 'axios';
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)

const auth = getAuth(app)
// console.log(auth)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const goggleProviderSingIn = new GoogleAuthProvider()


    const createUser = (email, password) => {
        console.log(email,password)
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleProvider = () => {
        setLoading(true)
        return signInWithPopup(auth, goggleProviderSingIn)
    }


    const updateUserProfile = (name, photo, email,number) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            email: email,
            number:number,
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {


        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('logged in user inside auth state observe', currentUser);
            setUser(currentUser)
            // setLoading(false)


            // jwt
            if (currentUser) {
                axios.post('https://amazing-ecommerce-server-side.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('JwtTokenSecret', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('JwtTokenSecret');
            }




        })
        return () => {
            unsubscribe()
        }

    }, [])
   




    const authInfo = {
        createUser, singIn, user, loading, googleProvider, logOut, updateUserProfile
    }
    console.log(authInfo)
    return (
        <>
            <AuthContext.Provider value={authInfo} >

                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;
