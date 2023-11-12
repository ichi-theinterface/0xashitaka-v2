import React from 'react';
import '../Page/App.css';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

const Main = () => (
    <div className="row">
      <div className="col-3 col-s-3 menu">
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

      <div className="col-6 col-s-9 main">
        <h1 className="Greetings NameinGreeting">What's up - I'm Ichiro!</h1>
        <h2 className='Greetings'>A Passionate Network Engineer</h2>
        <p className='Greetings'>
          Stay hungy and curious to learn about computer.<br/>
          What I love about computer is that more I learn about it,<br/>
          more things I find that I do not know!! 
        </p>
        <h1 className='horizontalblank'></h1>
        <h2 className='Greetings'>Check out my Blogs!!</h2>
        <div class="blog-button-container">
          <a href="/blog" class="blog-button">
            <h2 className='Greetings'>Go to Blog Page</h2>
          </a>
        </div>

      </div>
    </div>
)

export default Main;