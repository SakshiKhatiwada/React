import { LiaNewspaperSolid } from "react-icons/lia";


const Header = () => {
  return (
    <main className="mainHeader">
      <div className="Header">
        <h1><LiaNewspaperSolid /> News 24/7</h1>
        <p>Where you can find all the News articles</p>
      </div>
      <div>
        <img src="/src/assets/news-city.jpg" />
      </div>



    </main>
  )
}

export default Header;