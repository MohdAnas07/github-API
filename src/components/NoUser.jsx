import React from 'react'
import no_user from '../assets/noUser.svg'
import '../App.css';

const NoUser = () => {
    return (
        <div className='no_user'>
            <div className="wrapper">
                <h1>No User Found, search for a result...</h1>
                <img src={no_user} alt="" className="no_user_img" />
            </div>
        </div>
    )
}

export default NoUser
