import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  var styleGuide = { height: window.innerHeight + "px" };
  var IframestyleGuide = { height: window.innerHeight - 40 + "px" };
  const [divstyle, setDivStyle] = useState(styleGuide);
  const [Iframestyle, setIframeStyle] = useState(IframestyleGuide);
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      styleGuide = { height: window.innerHeight + "px" };
      setDivStyle(styleGuide);
      IframestyleGuide = { height: window.innerHeight - 40 + "px" };
      setIframeStyle(IframestyleGuide);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="backgrouddiv" style={divstyle}>
      <iframe
        src="https://web.powerva.microsoft.com/environments/Default-0b9d902d-e3c1-48f1-8979-365832b339dd/bots/cr6e3_knowledgeExplorerChatBot/webchat?__version__=2"
        frameborder="0"
        className="App-chatbox"
        style={Iframestyle}
      ></iframe>
    </div>
  );
}

export default App;
