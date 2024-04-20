import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  var styleGuide={height:window.innerHeight+'px'}
  var IframestyleGuide={height:window.innerHeight-40+'px'}
  const [divstyle, setDivStyle] = useState(styleGuide);
  const [Iframestyle, setIframeStyle] = useState(IframestyleGuide);
  useEffect(() => {
    const handleResize = () => {
        setHeight(window.innerHeight);
        styleGuide={height:window.innerHeight+'px'}
        setDivStyle(styleGuide);
        IframestyleGuide={height:window.innerHeight-40+'px'}
        setIframeStyle(IframestyleGuide);
        
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);
  return (
    <div className='backgrouddiv' style={divstyle} >
        {/* <img src="https://logos-world.net/wp-content/uploads/2023/10/Microsoft-Copilot-Logo.png" className="App-logo" alt="logo" /> */}
       {/* <img src="https://miro.medium.com/v2/resize:fit:1358/1*c3xF7B_4yVXakwo9ow8q3A.png" className="App-logo" alt="logo" /> */}
       {/* <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2023/11/MSFT_COPILOT_IGNITE_V1_THUMBNAIL_01.webp" alt="Background" className="background-image"/> */}
       {/* <img className="App-logo"></img> */}
       <iframe src="https://copilotstudio.microsoft.com/environments/Default-0b9d902d-e3c1-48f1-8979-365832b339dd/bots/cr6e3_tiffanyCoPilot/webchat?__version__=2" frameborder="0" className='App-chatbox' style={Iframestyle}></iframe>
     
    </div>
  );
}

export default App;
