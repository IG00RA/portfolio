import * as THREE from "three";
import PropTypes from "prop-types";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader from "../Loader";
/* eslint-disable */

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight />
      <directionalLight position={[0, 0, 0.05]} intensity={0.25} />
      <mesh castShadow receiveShadow scale={[2.75, 2.75, 2.75]}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
  const [decalLoaded, setDecalLoaded] = useState(false);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(icon, () => {
      setDecalLoaded(true);
    });
  }, [icon]);

  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} position0={0} />
      <Suspense fallback={<Loader />}>
        {decalLoaded && <Ball imgUrl={icon} />}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
