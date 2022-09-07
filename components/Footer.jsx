import React from 'react';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> 2022 Marcus Computer World.  All Rights Reserved.</p>
      <p className='icons'>
        <AiFillFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer;