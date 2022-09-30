import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getComments } from "../utils/api"
import CommentAdder from "./CommentAdder"
const Comments=()=>{
    const[comments,setComments]=useState([])
    const{review_id}=useParams()
    useEffect(()=>{
        getComments(review_id).then((com)=>{
            console.log(com)
            setComments(com)
        })
    },[review_id])

return(
    <section>
<ol className="Comments">
<h3>Comments for this review:</h3>
<CommentAdder setComments={setComments} />
{comments.map((comment)=>{
return(
<li key={comment.comment_id}>
    <p>{comment.body}</p>
</li>
)
})}
</ol>
</section>)
}

export default Comments