import './App.css'
import cat from '../public/Images/cat.jpg';
import sunflower from '../public/Images/sunflower.jpg';
import boat from '../public/Images/boat.jpg';
import bouquet from '../public/Images/bouquet.jpg';
import camera from '../public/Images/camera.jpg';

const IMAGES = [cat, sunflower, boat, bouquet, camera];
function App() {

  return (
    <>
     <ImageSlider imageUrls={IMAGES}/>
    </>
  )
}

export default App
