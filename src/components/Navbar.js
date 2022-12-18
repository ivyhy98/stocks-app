import { Link } from "react-router-dom"
export default function Navbar(){
    return (
      <div className="navbar">
        <h1>Stocks App</h1>
        <div className="nav">
          <h2>
            <Link to="/">Home</Link>
          </h2>
          <h2>
            <Link to="/about">About</Link>
          </h2>
        </div>
      </div>
    );
}