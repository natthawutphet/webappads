import { useState } from 'react'
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import reactLogo from './assets/ads_logo.png'
import viteLogo from '/ads_logo.png'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import GoogleAds from './GoogleAds'
import FaceBook_Ads from './FaceBook_Ads'
import Post from './Post'
import Home from './Home'
import './Header.css'

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);

  return (
    <BrowserRouter>
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#"> <img src="ads_logo.png" width={80} alt="ads_logo"/></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <NavLink to="/">Home</NavLink> 
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <NavLink to="/GoogleAds">GoogleAds</NavLink>                   
                             </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <NavLink to="/FaceBook_Ads">FaceBook_Ads</NavLink> 
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <NavLink to="/Blog">Blog</NavLink> 
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <a href="https://lin.ee/qjjcK05"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"/></a>
    
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                        <a href="tel:0956650050" class="btn btn-primary" >โทร-0956650050</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>
  
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/GoogleAds" element={<GoogleAds />}/>
          <Route path="/FaceBook_Ads" element={<FaceBook_Ads />}/>
          <Route path="/Blog" element={<Post />}/>
          </Routes>

    </BrowserRouter>
  )
}

export default App
