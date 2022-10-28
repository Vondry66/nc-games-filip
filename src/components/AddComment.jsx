import {useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../contexts/Users'
import {postComment} from '../utils/api'



function AddComment () {
    const [newComment, setNewComment] = useState('')
    const {loggedInUser, isLoggedIn} = useContext(UserContext)
    const [commentMessage, setCommentMessage] = useState('')

    
    const {review_id} = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (isLoggedIn){
            postComment(review_id, loggedInUser.username, newComment)
            setNewComment('')
        } else {
            setCommentMessage('You need to be logged in to post a comment')
        }
    }
            
            


      
    return (
        <section>
        <form className='AddComment' onSubmit={(e) => handleSubmit(e)} >
            <label htmlFor='newComment'>Add a comment</label>
            <textarea
            id='newComment'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button>Add</button>
        </form>
            <p>{commentMessage}</p>
        </section>
    )
}

export default AddComment