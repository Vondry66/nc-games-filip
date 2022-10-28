import {useEffect, useState, useContext} from 'react'
import { getComments, deleteComment } from '../utils/api'
import {useParams} from 'react-router-dom'
import moment from 'moment'
import AddComment from './AddComment'
import {UserContext} from '../contexts/Users'



function Comments () {
    const [allComments, setAllComments] = useState([])
    const {loggedInUser, isLoggedIn} = useContext(UserContext)
    const [deleteMessage, setDeleteMessage] = useState('')
    

    const {review_id} = useParams()

    const handleDelete = (comment_id)=> {
        if (isLoggedIn){
            deleteComment(comment_id)
            setDeleteMessage('Your comment has been deleted')
            setTimeout(() => {
                setDeleteMessage('') 
            }, 2500);
            
        }else {
            setDeleteMessage('You need to be logged in to delete your comment')
        }
    }

    useEffect(() => {
        getComments(review_id)
        .then(({comments}) => {
            setAllComments(comments)
        })
    }, [review_id, allComments])

    return (
        <section>
            <ul>
                {allComments.map(comments => {
                    return <li key={comments.comment_id}><h3>Comment by: {comments.author}</h3><p>{comments.body}</p><p>Posted : {moment(comments.created_at).format('dddd, MMMM Do YYYY')}</p><p>Votes : {comments.votes}</p>
                    <div>
                        {comments.author === loggedInUser.username ? 
                    (<button onClick={() => {handleDelete(comments.comment_id)}}>Delete</button>) : ('')}
                    <p>{deleteMessage}</p>
                    </div>
                    </li>
                   
                })}
                
                <AddComment/>
            </ul>
        </section>
        
        
    )
}

export default Comments