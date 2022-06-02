import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const Header = () => (
    <div class="header">
      <div className='HeaderButtonFrame'>
        <div className='HeaderButtons'>
          <Link to="/">
                 <h5 className='HeaderButtonText'>Home</h5>
          </Link>
         </div>
       </div>
     </div>     
)

export default Header;
