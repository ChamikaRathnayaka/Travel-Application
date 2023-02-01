import React from 'react'
import "./Write.css"

export default function Write() {
  return (
   <div className="Write">
       <div className="Write">
           <img
           className='WriteImg'
           src="images/img2.jpg"
           alt=""
           /> 
       </div>
       
       <form action="" className="WriteForm">
       <div className="WriteFormGroup">
           <label htmlFor="fileInput" >
           <i class="WriteIcon  fa-solid fa-circle-plus"></i>
           </label>
           <input type="file"  id="fileInput"  style={{display:"none"}}/>  
           <input type="text" placeholder='Title' className="WriteInputTitle" autoFocus={true}/>
           </div>

        <div className="WriteFormGroup">
            <textarea
                placeholder='My New Story.....  :-)'
                type="text"
                className='WriteInputBody WriteText'   

            ></textarea>
        </div>
        <button className='WriteSubmit'>PUBLISH</button>
       </form>
       
       
   </div>
  )
}
