import { Link } from "react-router-dom";

const Nav = ()=>{
    return ( <div>    <h1>Are you "Board"?</h1>
    <Link to="/Reviews">Reviews   </Link>
   <Link to={`/reviews/strategy`}>categories</Link>
    </div>)
}
export default Nav