import React from 'react';
import './App.css';
import pic1 from './pic1.jpeg';
import pic2 from './pic2.jpeg'; // Add picture file paths
import pic3 from './pic3.jpeg'; // Add picture file paths
import pic4 from './pic4.jpeg'; // Add picture file paths
import video1 from './video1.mp4'; // Add video file paths
import video2 from './video2.mp4'; // Add video file paths

function App() {
  const email = 'lola@example.com';

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={pic1} className="pic1" alt="pic1" />
        <h1>LOLA BUSARI</h1>
        <div className="social-links">
          <a className='instagram-link' href="https://www.instagram.com/lolabusari/?hl=en-gb">INSTAGRAM</a>
          <a className='spotlight-link' href="https://www.spotlight.com/0457-9052-9334">SPOTLIGHT</a>
          <a className='email-link' href={`mailto:${email}`}>EMAIL</a>
        </div>
        <p className="intro">
          Step into the world of captivating performances with Lola, a dynamic and accomplished actress hailing from the vibrant city of Greater London, England. With a rich heritage that blends British and Nigerian roots, Lola brings a unique and diverse perspective to her roles, enhancing the authenticity of her characters.
        </p>
        <div className="pictures">
            <img src={pic2} alt="pic2" />
            <img src={pic3} alt="pic3" />
            <img src={pic4} alt="pic4" />
          </div>
        <div className="media">
          <div className="videos">
            <video controls>
              <source src={video1} type="video/mp4" />
            </video>
            <video controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;
