import './styles/App.scss';
import React, {useEffect, useState} from "react";
import Canvas from "./components/canvas";
import MainSettings from "./components/mainSettings";
import Slider from "./components/slider";
import ParticleSettings from "./components/particleSettings";
import Media from "react-media";
import {useDispatch} from "react-redux";
import {createParticle} from "./store/particleSlice";
import Modal from "./components/modal";

function App() {
  const [count, setCount] = useState(0);
  const [gameIsOn, setGameIsOn] = useState(false);
  const [particleSize, setParticleSize] = useState(3);
  const [particleSpeed, setParticleSpeed] = useState(5);
  const [forceOfGravity, setForceOfGravity] = useState(4);
  const [canvasCleaning, setCanvasCleaning] = useState(true);
  const [borders, setBorders] = useState(false);
  const [startModalisOpen, setStartModalisOpen] = useState(true);

  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 549px)",
    medium: "(min-width: 550px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  };

  return (
    <>
      {startModalisOpen &&
        <Modal setModalIsOpen={setStartModalisOpen}>
          <div className='start-modal__wrapper'>
            <h2>Добро пожаловать в симулятор жизни!</h2>
            <p>(вернее это симулятор взаимодействия частиц, но симулятор жизни звучит красивее)</p>
          </div>
        </Modal>
      }
      <div className="App">
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {matches => (
            <Canvas
              count={count}
              gameIsOn={gameIsOn}
              particleSize={particleSize}
              particleSpeed={particleSpeed}
              forceOfGravity={forceOfGravity}
              canvasCleaning={canvasCleaning}
              borders={borders}
              canvasWidth={matches.small ? window.innerWidth - 20 : matches.medium ? 400 : 500}
            />
          )}
        </Media>

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
          gameIsOn={gameIsOn}
          setGameIsOn={setGameIsOn}
        />
        <ParticleSettings />
      </div>
    </>
  );
}

export default App;
