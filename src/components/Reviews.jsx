import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {getReviews} from '../utils/api'
import moment from 'moment';
import {Link} from 'react-router-dom'
import Comments from './Comments';



function AllReviews () {
    const [reviews, setReviews] = useState([])
    const [sortBy, setSortBy] = useState('created_at')
    const [orderBy, setOrderBy] = useState('desc')
    const [buttonText, setButtonText] = useState('Order Asc')


    const {category} = useParams()

    const handleSort = (e) => {
        setSortBy(e.target.value)
    }
   const handleOrder = (e) => {
    if (orderBy === 'asc'){
        setOrderBy('desc')
        setButtonText('Order Desc?')
    }else {
        setOrderBy('asc')
        setButtonText('Order Asc')
    }

   }
    

    useEffect(() => {
        
        getReviews(category, sortBy, orderBy)
        .then((reviews) => {
            
            setReviews(reviews)
        }) 
    }, [category, sortBy, orderBy])
    
    
    return (
        <section>
            <button onClick={handleOrder}>{buttonText}</button>
            <button onClick={handleSort} value='created_at'>Sort by Date</button>
            <button onClick={handleSort} value='comment_count'>Sort by Comment Count</button>
            <button onClick={handleSort} value='votes'>Sort by Votes</button>
            
    <ul>
        
        {reviews.map(review => {
            <Comments/>
            
            return <li key={review.review_id}><h2>{review.title}</h2><p>Designer : {review.designer}</p><p>Category : {review.category}</p><p>Created : {moment(review.created_at).format('dddd, MMMM Do YYYY')}</p><p>Comment : {review.comment_count}</p><p>Votes : {review.vote}</p><Link to={`/reviews/singleReview/${review.review_id}`}><img src={review.review_img_url} alt={review.designer} /></Link>
           
</li>
        })}
    </ul>
    </section>
)
}
export default AllReviews