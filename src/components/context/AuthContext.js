import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth"
import React, { createContext, useContext, useEffect, useReducer } from "react"
import { auth } from "../../firebase"
const authContext = createContext()
export const useAuthContext = () => useContext(authContext)

const INIT_STATE = {
  user: null
}

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHECK_USER":
      return { ...state, user: action.payload }
    default:
      return state
  }
}

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const googleProvider = new GoogleAuthProvider()

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log("erorr")
    }
  }

  function Check_User() {
    return onAuthStateChanged(auth, user => {
      dispatch({
        type: "CHECK_USER",
        payload: user
      })
    })
  }

  useEffect(() => {
    Check_User()
  }, [])

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  async function logOut() {
    try {
      await signOut(auth)
    } catch (error) {
      console.log("erorr")
    }
  }

  const values = {
    register,
    signInWithGoogle,
    user: state.user,
    logIn,
    logOut
  }
  return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export default AuthContext
