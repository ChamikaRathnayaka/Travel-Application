import React from 'react'
import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className="SinglePost">
        <div className="singlepostWrap">
            <img 
            src="./images/post1.jpg" 
            alt="" 
            className="SinglePostImg" 
            />

        <h1 className="SinglePostTitle">
            Lorem ipsum dolor sit amet consectetur !!

            <div className="singlePostEdit">
                <i className="SinglePostIcon  far fa-edit"></i>
                <i className="SinglePostIcon  far fa-trash-alt"></i>
            </div>
           
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author : <b>Chamika</b>
            </span>        
        </div> 

        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Tempore odit deleniti eius saepe architecto 
            minus quas aliquid impedit placeat autem esse harum,
             atqu ea voluptas facere nobis quo molestias similique.   
             Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Tempore odit deleniti eius saepe architecto 
            minus quas aliquid impedit placeat autem esse harum,
             atqu ea voluptas facere nobis quo molestias similique.
             Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Tempore odit deleniti eius saepe architecto 
            minus quas aliquid impedit placeat autem esse harum,
             atqu ea voluptas facere nobis quo molestias similique.
             Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Tempore odit deleniti eius saepe architecto 
            minus quas aliquid impedit placeat autem esse harum,
             atqu ea voluptas facere nobis quo molestias similique.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Tempore odit deleniti eius saepe architecto 
            minus quas aliquid impedit placeat autem esse harum,
             atqu ea voluptas facere nobis quo molestias similique.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Tempore odit deleniti eius saepe architecto 
            minus quas aliquid impedit placeat autem esse harum,
             atqu ea voluptas facere nobis quo molestias similique.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Tempore odit deleniti eius saepe architecto 
            minus quas aliquid impedit placeat autem esse harum,
             atqu ea voluptas facere nobis quo molestias similique.
        </p>

        
        </div>
    </div>
  )
}
