import './styles/App.scss';
import React, {useState} from "react";
import Canvas from "./components/canvas";
import MainSettings from "./components/mainSettings";
import Slider from "./components/slider";

function App() {
  const [count, setCount] = useState(0);
  const [particleSize, setParticleSize] = useState(3);
  const [particleSpeed, setParticleSpeed] = useState(5);
  const [forceOfGravity, setForceOfGravity] = useState(4);
  const [canvasCleaning, setCanvasCleaning] = useState(true);


  return (
    <div className="App">
      <button onClick={() => setCount(prev => prev + 1)}>Счетчик {count}</button>
      <Canvas
        count={count}
        particleSize={particleSize}
        particleSpeed={particleSpeed}
        forceOfGravity={forceOfGravity}
        canvasCleaning={canvasCleaning}
      />
      <MainSettings
        setCount={setCount}
        particleSize={particleSize}
        setParticleSize={setParticleSize}
        particleSpeed={particleSpeed}
        setParticleSpeed={setParticleSpeed}
        forceOfGravity={forceOfGravity}
        setForceOfGravity={setForceOfGravity}
        canvasCleaning={canvasCleaning}
        setCanvasCleaning={setCanvasCleaning}
      />

    </div>
  );
}

export default App;
