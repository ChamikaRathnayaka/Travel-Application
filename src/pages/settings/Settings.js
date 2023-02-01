import React from 'react'
import SideBar from '../../Components/side bar/SideBar'
import "./Settings.css";

export default function Settings() {
  return (
    <div className='settings'>
        <div className="SettingsWrapper">
          <div className="SettingsTitle">
            <span className="SettingUpdateTitle">Update Your Account</span>
              <span className="SettingDeleteTitle">Delete Account</span>
          </div>
            <form action="" className="SettingForm">
                <lable className="pTopic">Profile picture</lable>
                <div className="SettingsPP">
                <img
                    className='WriteImg'
                    src="images/img2.jpg"
                    alt=""
                /> 
                <label htmlFor="FileInput">
                <i class="SettingsPPIcon fa-solid fa-circle-user"></i>
                </label>

                <input type="file" id="findInput" style={{display:"none"}}/>
                </div>

                <lable>Username</lable>
                <input type="text" placeholder="username"/>
                <lable>Email</lable>
                <input type="Email" placeholder="chamika@gmail.com"/>
                <lable>password</lable>
                <input type="password" placeholder="password"/>
           
                <button className="SettingsButton">
                    Update
                </button>
            </form>

        </div>
        <SideBar/> 
    
    </div>
  )
}
