import {Link} from 'react-router-dom'
function Home () {
    return (
        <section>
        <h2>Are you bored? Board games!</h2>
        <Link className='enter_button' to={'/reviews'}><button>Enter here</button></Link>
        <div className='container'>
        
        </div>
        </section>
    )
}
export default Home