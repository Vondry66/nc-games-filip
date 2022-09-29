import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../utils/api";

const Category =()=>{
    const[categories,setCategories]=useState([])
    useEffect(()=>{
        getCategory().then((category)=>{
            setCategories(category)
        }).catch(err=>{})
    },[])
    return(<main>
         <h2 className="h2">Read reviews by category</h2><ul>
        {categories.map((cat)=>{
            
            
           return<li><Link to={`/reviews/${cat.slug}`}>{cat.slug}</Link></li>

        })}
        </ul>
    </main>)
    
}
export default Category