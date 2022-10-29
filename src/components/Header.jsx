import { useContext } from "react"
import { Link } from "react-router-dom"
import {UserContext}from '../contexts/Users'
// import '../css/Header'

function Header () {
    const {loggedInUser, isLoggedIn, setLoggedInUser} = useContext(UserContext)
  

    
    const handleLogOut = () => {
        setLoggedInUser({})
    }

    return (
        <header>
        <h1 className="element"> Are you "board?" </h1>
        {!isLoggedIn ? <Link to={'/users'}><button className="login">Log in</button></Link> : <button onClick={handleLogOut}>Log out?</button> }
        
            {isLoggedIn ? <section>
            <img
            className="profile_img"
            src={`${loggedInUser.avatar_url}`}
            alt={`avatar for ${loggedInUser.username}`}/>
            <p>{`${loggedInUser.username}`}</p>
        </section> : <p>Log in please</p>}
        
        </header>
    )
}

export default Header