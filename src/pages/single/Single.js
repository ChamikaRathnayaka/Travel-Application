import React from 'react'
import SideBar from '../../Components/side bar/SideBar'
import SinglePost from '../../Components/SinglePost/SinglePost'
import './Single.css';

export default function Single() {
  return (
    <div className="Single">
        <SinglePost/>
        <SideBar/>
      
    </div>
  )
}
