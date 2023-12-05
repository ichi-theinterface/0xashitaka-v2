import React from 'react';
//import '../Page/App.css';
import './Main.css'

const Main = () => (
    <div className="MainFrame">
      <div className="MainContent">
        <h1 className="Greetings NameinGreeting">What's up - I'm Ichiro!</h1>
        <h2 className='Greetings'>A Passionate Engineer</h2>
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