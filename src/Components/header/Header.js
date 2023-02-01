import "./Header.css"

const Header = () => {
    return ( 
        <div className="header">
            <div className="headerTitles">
                <h1 className="topic">Travel Vlog</h1>
            </div>
            <img src="images/sigiriya.jpg" alt="" className="headerImage" />
        </div>
     );
}
 
export default Header;