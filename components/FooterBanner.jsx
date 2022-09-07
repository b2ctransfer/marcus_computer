import React from 'react';
import Link from 'next/Link';
import {urlFor} from '../lib/client';

const FooterBanner = ({ footBanner :{discount, largeText1, largeText2, saleTime, smallText, midText, desc,product, buttonText, image} }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
      <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
      </div>
      <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
      </div>

        <img src={urlFor(image)} className="footer-banner-image"
        width={450}
        height={450}/>
      </div>
    </div>
  )
}

export default FooterBanner