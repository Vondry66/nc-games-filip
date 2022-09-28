import axios from "axios"
import { useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import Category from "./Category"
import { getReviews } from "../utils/api"
const Reviews = ()=>{
    const {categories_slug}=useParams()
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
       getReviews(categories_slug).then(({reviews})=>{
        setReviews(reviews)
       })
       
    },[categories_slug])
    return(
        <main>
            <Category />
            <ol>
                {reviews.map((review)=>{
                    return <li key={review.review_id}>
                        <h3>{review.title}</h3>
                        <p className="p">{review.category}</p>
                        <p className="p">{review.body}</p>
                        <p className="p">Made on :{review.created_at}</p>
                        <p className="count">Number of comments:{review.comment_count}</p>
                        <p className="count">Votes:{review.votes}</p>
                    </li>
                })}
            </ol>
        </main>
    )

}

export default Reviews