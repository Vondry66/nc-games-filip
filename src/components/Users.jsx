import {useContext, useEffect, useState} from 'react'
import { UserContext } from '../contexts/Users'
import {allUsers} from '../utils/api'


function Users () {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {setLoggedInUser} = useContext(UserContext)

    useEffect(() => {
        allUsers()
        .then(({users}) => {
            setUsers(users)
            setIsLoading(false)
        })
    }, [])
    if(isLoading){
        return <p className="loading">Loading...</p>
    }

    return (
        <section>
                <h2>Please choose a username</h2>
            <ul className='user_list'>
                {users.map((user) => {
                    return <li className='user_card' key={user.username}>
                        <img src={user.avatar_url} alt={user.name}/><p>{user.username}</p>
                        <button onClick={() => setLoggedInUser(user)}>Pick me!</button>
                    </li>
                })}
            </ul>
        </section>
    )
}
export default Users