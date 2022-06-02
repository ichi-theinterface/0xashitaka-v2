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
        <h1 className="Greetings NameinGreeting">What's up - I'm Ichiro!</h1>
        <h2 className='Greetings'>A network tech in a cloud provider</h2>
        <p className='Greetings'>
          Stay hungy and curious about the possibility of technology.<br/>
          What I love about IT is that more I learn about it,<br/>
          more things I find that I do not know!! 
        </p>
        <h1 className='horizontalblank'></h1>
        <h2>Where I've worked</h2>
        <div className='experiences'>
          <h2>Amazon AWS</h2>
          <h3>Network Deploy Tech</h3>
          <li>deploy</li>
          <li>config</li>
          </div>
        <div className='experiences'>
          <h2>SYSCOM GLOBAL SOLUTIONS INC</h2>
          <h3>Network Engineer</h3>
          <li>deploy</li>
          <li>config</li>
          </div>
        <div className='experiences'>
          <h2>International Education Center</h2>
          <h3>Student Assistant</h3>
          <li>deploy</li>
          <li>config</li>
          </div>
      </div>
    </div>
)

export default Main;