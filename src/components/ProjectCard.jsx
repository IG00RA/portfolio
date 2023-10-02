import PropTypes from "prop-types";
import { github, pineapple, pineappleHover } from "../img";
import { motion } from "framer-motion";

export const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  active,
  handleClick,
}) => {
  const btnIcon = document.querySelector(".btn-icon");
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`relative ${
        active === id ? "md:flex-[3.5] flex-[10]" : "md:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[220px] 
      h-[420px] cursor-pointer card-shadow bg-jetLight opacity-[0.3] hover:opacity-[0.8] `}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 
      h-full w-full rounded-[24px]"
      ></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
        loading="lazy"
      />

      {active !== id ? (
        <div
          className="absolute flex right-0 p-4 md:p-8 justify-start w-full lxs:w-60 xs:w-80 md:w-20 
            flex-col bg-[rgba(122,122,122,0.75)] z-20 h-full rounded-tl-[24px] rounded-bl-[24px] lxs:rounded-tl-[0px] lxs:rounded-bl-[0px] rounded-tr-[24px] rounded-br-[24px]"
        >
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 md:bottom-[7rem] md:rotate-[-90deg] md:origin-[0,0]
        leading-none z-20 transition duration-[0.3s] ease-in-out transform hover:scale-110 right-15 md:right-[-60px]"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.75)] rounded-b-[24px] z-20"
          >
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, "_blank")}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
      flex justify-center items-center cursor-pointer
      sm:opacity-[0.9] opacity-[0.8]"
              >
                <img
                  loading="lazy"
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain transition-transform 
                 transform scale-100 hover:scale-110"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]"
            >
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.3s] 
              ease-in-out"
              onClick={() => window.open(demo, "_blank")}
              onMouseOver={() => {
                btnIcon.setAttribute("src", pineappleHover);
              }}
              onMouseOut={() => {
                btnIcon.setAttribute("src", pineapple);
              }}
            >
              <img
                loading="lazy"
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};
ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
