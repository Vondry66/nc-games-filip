import axios from "axios"
import { useEffect,useState} from "react"

const Reviews = ()=>{
    const reviewUrl = "https://nc-games-vondry.herokuapp.com/api/reviews"
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        axios.get(reviewUrl).then(({data})=>{
            console.log(data.reviews)
            setReviews(data.reviews)
        })
    },[])
    return(
        <main>
            <ol>
                {reviews.map((review)=>{
                    return <li key={review.review_id}>
                        <h3>{review.title}</h3>
                        <p>{review.category}</p>
                        <p>{review.body}r</p>
                    </li>
                })}
            </ol>
        </main>
    )

}

export default Reviews