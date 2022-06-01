import './App.css';
import imgB from './MaingImg1.jpg';
import imgC from './MaingImg2.png';
import imgD from './MainImg3.jpg';
import './main2.css';

function Main2() {
  return (
    <div className="container">
      <div className="image1">
        <img className="image" src={imgB} alt="image" />
        <p> 이름 들어감</p>
      </div>

      <div className="image1">
        <img className="image" src={imgC} alt="image" />
        <p> 이름 들어감</p>
      </div>

      <div className="image1">
        <img className="image" src={imgD} alt="image" />
        <p> 이름 들어감</p>
      </div>
    </div>
  );
}

export default Main2;
