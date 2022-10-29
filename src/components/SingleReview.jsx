

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { reviewByID } from "../utils/api"
import { voteOnReview } from "../utils/api"
import Comments from "./Comments"



function ReviewCard () {

    const [singleReview, setSingleReview] =useState({})
    const [incVotes, setIncVotes] = useState(null)
    const [hasVoted, setHasVoted] = useState(false)
    const [voteMessage, setVoteMessage] = useState('')

    const handleIncVotes = (review_id) => {
        if (!hasVoted){
            voteOnReview(review_id)
            setIncVotes((currVotes) => 
            currVotes + 1
            
            )
            setHasVoted(true)
        }else {
            setVoteMessage('Sorry you can only vote once')
        }
        
    }

    const {review_id} = useParams()


    useEffect(() => {
        reviewByID(review_id)

        .then((reviews) => {

            setSingleReview(reviews)
            setIncVotes(reviews.votes)
        })      
    }, [review_id])
console.log(singleReview)

    return (
        <section>
        <h2>Username : {singleReview.owner}</h2>
        <p>Review title : {singleReview.title}</p>
        <p>Game designer : {singleReview.designer}</p>
        <p>{singleReview.review_body}</p>
        <button onClick={() => handleIncVotes(singleReview.review_id)}>{incVotes}<span aria-label="votes for this review"> 👍</span></button><p>{voteMessage}</p>
        <p>Game category : {singleReview.category}</p>
        <img className="img" src={singleReview.review_img_url} alt={singleReview.owner}/>
        <Comments />

        </section>
    )
}

export default ReviewCard