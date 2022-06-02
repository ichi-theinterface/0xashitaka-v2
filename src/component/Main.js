import React from 'react';
import '../App.css';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

const Main = () => (
    <div class="row">
      <div class="col-3 col-s-3 menu">
        <ul>
        <li>
            <a href="https://twitter.com/BiteChacha" target="_blank">
              <img className="img-responsive" src={twitter} alt="logo"/>
	           </a>
           </li>
          <li>
	        <a href="https://www.linkedin.com/in/ichiro-yamasaki-1692aa168/" target="_blank">
            <img className="img-responsive" src={linkedin} alt="logo"/>
	         </a>
           </li>
          <li>
	        <a href="https://github.com/ichi-theinterface" rel="noreferrer" target="_blank">
            <img className="img-responsive" src={github} alt="logo"/>
	         </a>
           </li>
        </ul>
      </div>

      <div class="col-6 col-s-9 main">
        <h1 className="NameinGreeting">What's up - I'm Ichiro!</h1>
        <p>
          Stay hungy and curious about the possibility of technology.<br/>
          What I love about IT is that more I learn about it,<br/>
          more things I find that I do not know!! 
      </p>
      </div>
    </div>
)

export default Main;