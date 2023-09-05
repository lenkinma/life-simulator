import './styles/App.scss';
import {useState} from "react";
import Canvas from "./components/canvas";
import MainSettings from "./components/mainSettings";

function App() {
  const [count, setCount] = useState(0);
  const [particleSize, setParticleSize] = useState(3);
  const [particleSpeed, setParticleSpeed] = useState(0.5);
  const [forceOfGravity, setForceOfGravity] = useState(80);


  return (
    <div className="App">
      <button onClick={() => setCount(prev => prev + 1)}>Счетчик {count}</button>
      <Canvas
        count={count}
        particleSize={particleSize}
        particleSpeed={particleSpeed}
        forceOfGravity={forceOfGravity}
      />
      <MainSettings />
    </div>
  );
}

export default App;
