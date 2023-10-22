import React from 'react';
import '../Page/App.css';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
      <div className='HeaderButtonFrame'>
        <div className='HeaderButtons'>
          <Link to="/">
                 <h5 className='HeaderButtonText'>Home</h5>
          </Link>
          <Link to="/blog">
                 <h5 className='HeaderButtonText'>Blog</h5>
          </Link>
         </div>
       </div>
     </div>     
)

export default Header;
