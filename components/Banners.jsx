import React from "react";
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const images = [
    
    {
      original: 'https://xcien.vercel.app/img/Banners/SitioWeb_PromoAgo_xcien.png',
      thumbnail: 'https://xcien.vercel.app/img/Banners/SitioWeb_PromoAgo_xcien.png',
      
    
      
    },
    {
      original: 'https://xcien.vercel.app/img/Banners/Banner-IPv6-XCIEN.png',
      thumbnail: 'https://xcien.vercel.app/img/Banners/Banner-IPv6-XCIEN.png',
    },
    {
      original: 'https://xcien.vercel.app/img/Banners/banner-tanarah-xcien.png',
      thumbnail: 'https://xcien.vercel.app/img/Banners/banner-tanarah-xcien.png',
    },
    {
      original: 'https://xcien.vercel.app/img/Banners/SDWAN-JUL-XCIEN.png',
      thumbnail: 'https://xcien.vercel.app/img/Banners/SDWAN-JUL-XCIEN.png',
    }
  ];

class Banners extends React.Component {

  render() {
    return (
        <div className="flex justify-center dark:bg-black">
            <ImageGallery
            thumbnailPosition="bottom"
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            autoPlay={true}
            items={images} />
        </div>
    );
  }
}
export default Banners;