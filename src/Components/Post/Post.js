import "./Post.css"

const Post = () => {
    return ( 
    <div className="Post">
      <img src="./images/post1.jpg" alt="" className="postImg" />
    
        <div className="postInfo">
            <div className="postCats">
                <span className="postcat">Beaches</span>
            </div>

            <span className="postTitle">
                 Lorem ipsum dolor sit amet consectetur
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>

        <div className="postDescription">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi, iure itaque! Tempora quas rerum consectetur adipisci quo,
                acilis perferendis. Veniam vel ipsum est exercitationem 
                dignissimos labore nihil perspiciatis, iste enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi, iure itaque! Tempora quas rerum consectetur adipisci quo,
                acilis perferendis. Veniam vel ipsum est exercitationem 
                dignissimos labore nihil perspiciatis, iste enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi, iure itaque! Tempora quas rerum consectetur adipisci quo,
                acilis perferendis. Veniam vel ipsum est exercitationem 
                dignissimos labore nihil perspiciatis, iste enim.
            </p>
        </div>
    
    </div> );
}
 
export default Post;