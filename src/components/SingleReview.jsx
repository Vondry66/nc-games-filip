import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
import { patchVotes } from "../utils/api";

const SingleReview=()=>{
    const[review,setReview]=useState([])
    const{review_id}=useParams()
    const[votes,setVotes]=useState(null)
    const{inc_votes}=useParams()
    const[isClicked,setIsClicked]=useState(false)
    useEffect(()=>{
        patchVotes(inc_votes).then((res)=>{
           
            setVotes((currVotes)=>{
                return currVotes.map((vote)=>{
                    if(res.vote === vote){
                        return{...vote, votes:res.votes+1}
                    }
                    return vote + 1;
                })
            })
           
    })
        getSingleReview(review_id).then((rev)=>{
            setReview(rev)
            
        })
    },[review_id])



    return(
        <section>
            <h2>{review.title}</h2>
            
            <p className="p">Written by:{review.owner}</p>
            <img className="img" src={review.review_img_url} alt="Picture of the game" />
            <p className="p">Category:{review.category}</p>
            <p className="p">{review.review_body}</p>
            <p className="p">Made on :{review.created_at}</p>
            <p className="count">Number of comments:{review.comment_count}</p>
            <p className="count">Votes:{review.votes}</p>
            <button className="votes" onClick={()=>patchVotes(review.review_id)}>{votes}
            <span className="votes">{`Like | ${votes+1}`}</span></button>
            </section>
    )
}

export default SingleReview