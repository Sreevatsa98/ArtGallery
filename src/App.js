import './App.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className='box'>
      Hello World!
      <aside>
        <h1 class='header'>Header</h1>
        <ul class='sidebar'>
          <li class='logo'><a href="#">Gallery</a></li>
          <li class='navbutton'><a href="#">Home</a></li>
          <li class='navbutton'><a href="#">About</a></li>
          <li class='navbutton'><a href="#">Bio</a></li>
          <li class='navbutton'><a href="#">Blog</a></li>
          <li class='navbutton'><a href="#">Contact</a></li>
          
          <ol class='handle'>
            <li><a src="www.facebook.com" alt="Facebook" /><FaFacebookSquare /> </li>
            <li><a src="www.instgram.com" alt="Instagram" /><FaInstagramSquare /> </li>
            <li><a src="www.x.com" alt="X" /><FaSquareXTwitter /></li>
          </ol>
        </ul>
      </aside>
    </div>
  );
}

export default App;
