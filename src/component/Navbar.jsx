
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import About from './About';
const Hero = (props) => {
    return (
        <div>
       <nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">About</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2"  onClick = {() => {props.toggleMode('primary')}}style = {{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style = {{height: '30px', width: '30px',cursor: 'pointer'}}></div>
        <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style = {{height: '30px', width: '30px',cursor: 'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style = {{height: '30px', width: '30px',cursor: 'pointer'}}></div>
      </div>

      <div className={`form-check form-switch ${props.mode === "light"? "black":"white"}`}>
  <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
        </div>
    );
};

Navbar.propTypes =
{
    title: PropTypes.string,
    des: PropTypes.string,
    
}
Navbar.defaultProps =
{
    title: "Home",
    des: "AmaZon",

}
export default Hero;