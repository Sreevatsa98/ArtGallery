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
        <img src="/images/image1.jpg" alt="Image Here!"/>
        <img src="/images/image2.jpg" alt="Image Here!"/>
        <img src="/images/image3.jpg" alt="Image Here!"/>
        <img src="/images/image4.jpg" alt="Image Here!"/>
        <img src="/images/image5.jpg" alt="Image Here!"/>
        <img src="/images/image6.jpg" alt="Image Here!"/>
        <img src="/images/image7.jpg" alt="Image Here!"/>
        <img src="/images/image8.jpg" alt="Image Here!"/>
        <img src="/images/image9.jpg" alt="Image Here!"/>
        <img src="/images/image10.jpg" alt="Image Here!"/>
        <img src="/images/image11.jpg" alt="Image Here!"/>
        <img src="/images/image12.jpg" alt="Image Here!"/>
        <img src="/images/image13.jpg" alt="Image Here!"/>
        <img src="/images/image14.jpg" alt="Image Here!"/>
        <img src="/images/image15.jpg" alt="Image Here!"/>
        <img src="/images/image16.jpg" alt="Image Here!"/>
        <img src="/images/image17.jpg" alt="Image Here!"/>
        <img src="/images/image18.jpg" alt="Image Here!"/>
        <img src="/images/image19.jpg" alt="Image Here!"/>
        <img src="/images/image20.jpg" alt="Image Here!"/>
        <img src="/images/image21.jpg" alt="Image Here!"/>
        <img src="/images/image22.jpg" alt="Image Here!"/>
        <img src="/images/image23.jpg" alt="Image Here!"/>
        <img src="/images/image24.jpg" alt="Image Here!"/>
        <img src="/images/image25.jpg" alt="Image Here!"/>
        <img src="/images/image26.jpg" alt="Image Here!"/>
        <img src="/images/image27.jpg" alt="Image Here!"/>
        <img src="/images/image28.jpg" alt="Image Here!"/>
        <img src="/images/image29.jpg" alt="Image Here!"/>
        <img src="/images/image30.jpg" alt="Image Here!"/>
      </div>
    </div>
  );
}

export default App;
