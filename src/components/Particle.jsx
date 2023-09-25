import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
  //   useEffect(() => {
  //     const particleContainer = document.getElementById("section-particles");
  //     console.log(particleContainer);
  //     if (particleContainer) {
  //       const canvasElement = particleContainer.querySelector("canvas");
  //       console.log(canvasElement);
  //       if (canvasElement) {
  //         // Видаліть атрибут "style" з canvas, що встановлює "position: fixed"
  //         canvasElement.removeAttribute("style");

  //         // Встановіть потрібну позицію, наприклад, "position: absolute"
  //         canvasElement.style.position = "absolute";
  //       }
  //     }
  //   }, []); // [] означає, що цей ефект запуститься тільки при монтажі компонента

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = async () => {};
  return (
    <>
      <Particles
        // id="section-particles"
        // className="my-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100wh",
            height: "100wh",
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#383838",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#383838",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default Particle;
