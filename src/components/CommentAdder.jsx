import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

const CommentAdder=({setComments})=>{
    const[newComment,setNewComment]=useState('');
    const{review_id}=useParams()

    const handleSubmit =(e)=>{
        e.preventDefault();
        postComment(review_id).then((com)=>{
            setComments((currComments)=>{
                return[com,...currComments]
            })
        })
    }
    return(
        <form className="CommentAdder" onSubmit={(e)=>handleSubmit(e)}>
            <label className="Cmnt" htmlFor="newComment">Add a comment</label>
            <textarea className="AddInput" id="newComment" value={newComment} onChange={(e)=> setNewComment(e.target.value)}></textarea>
            <button>Add</button>
        </form>
    )
}
export default CommentAdder