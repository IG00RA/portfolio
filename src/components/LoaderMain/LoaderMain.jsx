import { loaderMain } from "../../img";
import { LoaderContainer, LoaderImage } from "./LoaderMain.styled";

const LoaderMain = () => {
  return (
    <LoaderContainer>
      <LoaderImage src={loaderMain} alt="Loader" />
    </LoaderContainer>
  );
};
export default LoaderMain;
