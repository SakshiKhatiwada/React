import {Link} from 'react-router-dom';



const HomePage = () => {
    return (
        <main className='home'>
            <hr />
            <h2>Get started with our fast news anywhere</h2>
            <Link to='/allPosts'><button>Click to explore posts</button></Link>
        </main>
    )
}



export default HomePage