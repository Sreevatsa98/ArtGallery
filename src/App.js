import React, { useState, useEffect } from 'react';
import './App.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Hamburger from 'hamburger-react';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect window resize to set mobile or desktop mode
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // breakpoint at 768px
      if (window.innerWidth > 768) {
        setOpen(false); // close sidebar on desktop
      }
    }

    handleResize(); // initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  //Display Image and move back and forth between images 
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = closed

  const images = Array.from({ length: 30 }, (_, i) => `/images/image${i + 1}.jpg`);


  function openLightbox(index) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function goNext() {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  }

  function goPrev() {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className='box'>
      {/* Show hamburger only on mobile */}
      {isMobile && (
        <div id="burgericon" style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
      )}

      {/* Sidebar: visible if desktop or if mobile & open */}
      {( !isMobile || isOpen ) && (
        <aside className='sidebar'>
          {/* <h1 className='header'>Header</h1> */}
          <ul>
            <li className='logo'><a href="#">Gallery</a></li>
            <li className='navbutton'><a href="#">Home</a></li>
            <li className='navbutton'><a href="#">About</a></li>
            <li className='navbutton'><a href="#">Bio</a></li>
            <li className='navbutton'><a href="#">Blog</a></li>
            <li className='navbutton'><a href="#">Contact</a></li>

            <ol className='handle'>
              <li><a href="https://www.facebook.com" alt="Facebook"><FaFacebookSquare /></a></li>
              <li><a href="https://www.instagram.com" alt="Instagram"><FaInstagramSquare /></a></li>
              <li><a href="https://www.x.com" alt="X"><FaSquareXTwitter /></a></li>
            </ol>
          </ul>
        </aside>
      )}

      <div class="gallery">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            onClick={() => openLightbox(i)}
          />
        ))}  
      </div>

      {/* Image Display */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>&#10094;</button>
          <img
            src={images[lightboxIndex]}
            alt={`Image ${lightboxIndex + 1}`}
            onClick={e => e.stopPropagation()}
            className="lightbox-image"
          />
          <button className="next" onClick={(e) => { e.stopPropagation(); goNext(); }}>&#10095;</button>
          <button className="close" onClick={closeLightbox}>&times;</button>
        </div>
      )}  

    </div>
  );
}

export default App;
