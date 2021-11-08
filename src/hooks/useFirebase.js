import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, updateProfile,getIdToken ,signOut } from "firebase/auth";
import { useEffect } from "react";


// initialize firebase authentication app
initializeAuthentication()

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token,setToken]=useState('')
    
    const registerUser = (email, password,name,history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to the database
                saveUser(email,name)

                updateProfile(auth.currentUser, {
                    displayName: name,
                  }).then(() => {
                  }).catch((error) => {
                  });

                history.push('/')
            })
            .catch((error) => {
                setAuthError(error.message)
                 
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password,location,history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('')

            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setLoading(false));
    }

    const signInWithGoogle = (location, history,email,name) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
        const destination = location?.state?.from || '/';
        history.push(destination);
            
        const newUser = { email, displayName: name }
        setUser(newUser);

        saveOneTime(result.user.email,result.user.displayName);
        setAuthError('')

        }).catch((error) => {
        setAuthError(error.message)

        }).finally(()=> setLoading(false));
    }
    
    // observe user state
    useEffect(() => {
      const unSubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                    setToken(idToken);
                })
            } else {
              setUser({})
          }
          setLoading(false);
      });
        return () => unSubscribe;
    }, [])
    
    useEffect(() => {
        fetch(`https://whispering-harbor-44995.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
        .finally(()=>setLoading(false))
    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://whispering-harbor-44995.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    } 
    const saveOneTime = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://whispering-harbor-44995.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    } 

    return {
        user,
        admin,
        token,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        authError
    }   
}
export default useFirebase;