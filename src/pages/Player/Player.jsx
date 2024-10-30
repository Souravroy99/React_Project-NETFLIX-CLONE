import React from 'react';
import "./Player.css";
import backArrow from "../../assets/back_arrow_icon.png"

const Player = () => {
  return (
    <div className='player'>
      <img src={backArrow} alt="" />
      <iframe width="90%" height="90%" src='https://www.youtube.com/embed/CogVz79GFmI' title='Vardaan' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>

    </div>
  )
}

export default Player