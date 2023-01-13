import React from 'react'
import '../App.css'

const Home = ({ user }) => {
    return (
        <div className='user_details'>
            <div className="wrapper">
                <div className="avatar">
                    <img src={user.avatar_url} alt="Avatar" />
                </div>
                <div className="biodata">
                    <h2 className="username"> {user.name} </h2>
                    <p className="bio">{user.bio}</p>
                    <p className='location'> Location - {user.location}</p>
                </div>
            </div>
        </div>
    )
}

export default Home