import "./SideBar.css"

const SideBar = () => {
    return ( 
    <div className="SideBar">
        <div className="SideBarItem">
            <span className="sideBarTitle">ABOUT ME</span>
            <img src="./images/side1.jpg" alt="" className="sideImage" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quasi obcaecati doloremque illum reiciendis laboriosam, explicabo incidunt odit porro laborum. Reprehenderit, tempore voluptatem consectetur at nihil modi aperiam. Nihil, dicta?</p>
        </div>

        <div className="SideBarItem">
            <span className="sideBarTitle">CATEGORIES</span>
            <ul className="sideBarList">
                <li className="sideBarListItem">Hike</li>
                <li className="sideBarListItem">Beaches</li>
                <li className="sideBarListItem">Traditional</li>
                <li className="sideBarListItem">Street Food</li>
                <li className="sideBarListItem">Culture</li>
            </ul>
        </div>

        <div className="SideBarItem">
            <span className="sideBarTitle">FOLLOW US</span>
            <div className="SideBarSocial">
                <i className="SideBarIcon fab fa-facebook-square"></i>
                <i className="SideBarIcon fab fa-twitter-square"></i>
                <i className="SideBarIcon fab fa-linkedin"></i>
                <i className="SideBarIcon fab fa-instagram-square"></i>
            </div>
        </div>

    </div> 
     );
}
 
export default SideBar;