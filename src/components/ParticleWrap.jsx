import { useEffect, useState } from "react";
import Particle from "./Particle";

const ParticleWrap = () => {
  const [hasTouchScreen, setHasTouchScreen] = useState(false);

  useEffect(() => {
    const supportsTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setHasTouchScreen(supportsTouch);
  }, []);
  if (!hasTouchScreen) {
    return <Particle />;
  }
  return null;
};

export default ParticleWrap;
