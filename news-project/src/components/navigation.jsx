import { FaGlobe } from "react-icons/fa6";
const Navigation = () => {
  return (
    <div className="navigation">
    <FaGlobe className="icon"/>
    <nav className="navBar">
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/contactUs'>Contact us</a></li>
      <li><a href='/allPosts'>All Posts</a></li>
    </ul>
  </nav>
  </div>
  )
}

export default Navigation