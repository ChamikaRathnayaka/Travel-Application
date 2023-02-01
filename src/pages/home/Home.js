import "./Home.css";
import Header from "../../Components/header/Header";

import SideBar from "../../Components/side bar/SideBar";
import Posts from "../../Components/Posts/Posts";

const Home = () => {
    return ( 
        <div>
            <Header/>

            <div className="home">
                <Posts/>
                <SideBar/>
            </div>
        </div>
     );
}
 
export default Home;