import { Link } from "react-router-dom";

export default function Navbar() {
 return (
   <nav className="navbar navbar-dark bg-primary">
     <div className="container">
       <Link className="navbar-brand" to="/">
         Cuidar el Alma
       </Link>
     </div>
   </nav>
 );
}
