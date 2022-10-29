import {Link} from 'react-router-dom'
function Home () {
    return (
        <section>
        <h2>Board games!</h2>
        <Link className='enter_button' to={'/reviews'}><button className='login'>Let's explore!</button></Link>
        <div className='container'>
        
        </div>
        </section>
    )
}
export default Home