import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";

const SingleReview=()=>{
    const[review,setReview]=useState([])
    const{review_id}=useParams()
    useEffect(()=>{
        getSingleReview(review_id).then((rev)=>{
            setReview(rev)
            
        })
    },[review_id])
    return(
        <section>
            <h2>{review.title}</h2>
            
            <p className="p">Written by:{review.owner}</p>
            <img className="img" src={review.review_img_url} alt="Picture of " />
            <p className="p">{review.category}</p>
            <p className="p">{review.review_body}</p>
            <p className="p">Made on :{review.created_at}</p>
            <p className="count">Number of comments:{review.comment_count}</p>
            <p className="count">Votes:{review.votes}</p>
            </section>
    )
}

export default SingleReview