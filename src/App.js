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
  const [borders, setBorders] = useState(false);
  const [particlesRules, setParticlesRules] = useState([
    {id: 0, on: true, color: 'red', amount: 1000, withSelf: 100, with1: 100, with2: 100, with3: 100},
    {id: 1, on: false, color: 'blue', amount: 1000, withSelf: 100, with1: 100, with2: 100, with3: 100},
    {id: 2, on: false, color: 'green', amount: 1000, withSelf: 100, with1: 100, with2: 100, with3: 100}
  ]);


  return (
    <div className="App">
      <Canvas
        count={count}
        particleSize={particleSize}
        particleSpeed={particleSpeed}
        forceOfGravity={forceOfGravity}
        canvasCleaning={canvasCleaning}
        borders={borders}
        particlesRules={particlesRules}
        setParticlesRules={setParticlesRules}
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
        borders={borders}
        setBorders={setBorders}
      />
      <ParticleSettings
        particlesRules={particlesRules}
        setParticlesRules={setParticlesRules}
      />
    </div>
  );
}

export default App;
