import React from 'react';
//import '../Page/App.css';
import './Header.css'
import { Link } from "react-router-dom";

import X from '../images/twitter.png'
import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'

const Header = () => (
    <div className="header">
        <div className='button_group'>
          <Link to="/">
                 <h5 className='HeaderButtonText'>Home</h5>
          </Link>
          <Link to="/blog">
                 <h5 className='HeaderButtonText'>Blog</h5>
          </Link>
        </div>
        <div className='button_group'>
          <a href="https://twitter.com/son_of_a_byte">
            <img src={X} alt="X" className='x_button'/>
          </a>
          <a href="https://github.com/ichi-theinterface">
            <img src={GitHub} alt="GitHub" className='github_button' />
          </a>
          <a href="https://www.linkedin.com/in/ichiro-yamasaki-1692aa168/">
            <img src={LinkedIn} alt="LinkedIn" className='linkedin_button'/>
          </a>
         </div>
     </div>     
)

export default Header;
