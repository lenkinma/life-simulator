import './styles/App.scss';
import React, {useState} from "react";
import Canvas from "./components/canvas";
import MainSettings from "./components/mainSettings";
import Slider from "./components/slider";
import ParticleSettings from "./components/particleSettings";

function App() {
  const [count, setCount] = useState(0);
  const [particleSize, setParticleSize] = useState(3);
  const [particleSpeed, setParticleSpeed] = useState(5);
  const [forceOfGravity, setForceOfGravity] = useState(4);
  const [canvasCleaning, setCanvasCleaning] = useState(true);
  const [particles, setParticles] = useState([
    {on: true, color: 'red', amount: 200, with1: 100, with2: 100, with3: 100},
    {on: true, color: 'blue', amount: 200, with1: 100, with2: 100, with3: 100},
    {on: true, color: 'green', amount: 200, with1: 100, with2: 100, with3: 100}
  ]);


  return (
    <div className="App">
      <Canvas
        count={count}
        particleSize={particleSize}
        particleSpeed={particleSpeed}
        forceOfGravity={forceOfGravity}
        canvasCleaning={canvasCleaning}
        particles={particles}
        setParticles={setParticles}
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
      <ParticleSettings
        particles={particles}
        setParticles={setParticles}
      />
    </div>
  );
}

export default App;
