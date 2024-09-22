import { LiaNewspaperSolid } from "react-icons/lia";

const Navigation = <nav className="navBar">
  <ul>
    <li><a href='/'>Home</a></li>
    <li><a href='/contactUs'>Contact us</a></li>
    <li><a href='/allPosts'>All Posts</a></li>
  </ul>
</nav>;
const Header = () => {
  return (
    <main className="mainHeader">
      <div className="Header">
        <h1><LiaNewspaperSolid /> News 24/7</h1>
        <p>Where you can find all the News articles</p>
        {Navigation}
      </div>
      <div>
        <img src="/src/assets/news-city.jpg" />
      </div>



    </main>
  )
}

export default Header;