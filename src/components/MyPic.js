import 'bootstrap/dist/css/bootstrap.min.css';
import './MyPic.css'


function MyPic() {
    return (
        <div>
            <img className="main-img" src={require('../assets/me_300.png')}  />
        </div>
    );
  }
  
  export default MyPic;