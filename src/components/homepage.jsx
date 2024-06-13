import { useState } from "react"
import { auth } from "../firebase-config"
import { onAuthStateChanged, signOut } from "firebase/auth"

const Homepage = ()=> {
    const [user, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    },[])

    const logout = async () => {
        await signOut(auth)
    }
    return(
        <div>
            <h3>User logged in: {user?.email}</h3>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Homepage;