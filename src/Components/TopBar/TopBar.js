import "./Top.css"
import {Link} from 'react-router-dom'
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const TopBar = () => {
    const user = false;
    return ( 
        <div className="Top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                {/* <ul className="topList"> */}
                    <li className="topListItem" >
                        <Link to='/' style={{textDecoration:"none", color:" "}}>HOME</Link>
                    </li>
                    <li className="topListItem"> 
                        <Link to='/about' style={{textDecoration:"none", color:" "}}>ABOUT</Link>
                    </li>
                    <li className="topListItem">
                         <Link to='/contact'style={{textDecoration:"none", color:" "}}>CONTACT</Link>
                    </li>
                    <li className="topListItem"> 
                        <Link to='/write'style={{textDecoration:"none", color:" "}}>WRITE</Link>
                    </li>
                    {/* <li className="topListItem"> 
                        <Link to='/settings'>Settings</Link>
                    </li>
                    <li className="topListItem"> 
                        <Link to='/register'>Tr</Link>
                    </li> */}
                    
                    <li className="topListItem" style={{textDecoration:"none", color:" "}}>
                        {user && "LOGOUT"}
                    </li>
                {/* </ul> */}
               
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img 
                            src="./images/img1.jpg" 
                            alt="" 
                            className="topImg" />
                       
                    ) : (
                         <>
                         <ul>
                            <Link className="topListItem" to='/login' style={{textDecoration:"none", color:" ", fontSize:"20px"}}>
                                Login
                            </Link>
                         </ul>

                        <ul>
                            <Link className="topListItem" to='/register'style={{textDecoration:"none", color:" ", fontSize:"20px",marginLeft:"-25px"}}>
                                Register
                            </Link>
                        </ul> 
                        <ul>
                        <img 
                            src="./images/img1.jpg" 
                            alt="" 
                            className="topImg" />
                       
                        </ul>
                           
                         </>   
                    )
                }
                <i className="SearchIcon fas fa-search"></i>
                
            </div>
        </div>   
     );
}
 
export default TopBar;