// Modules
import { useContext } from "react";

// Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

// Components
import ButtonDocument from "@components/buttons/ButtonDocument";

const ButtonDownloadCV = () => {
  const { base_route } = useContext(NavigationContext);
  console.log(base_route)
  const cv_path = `${base_route}/doc/resume.pdf`;

  const handleDownloadClick = () => {
    window.open(cv_path, "_blank");
  };

  return (
    <ButtonDocument onClick={handleDownloadClick} btn_text="View My Resume" />
  );
};

export default ButtonDownloadCV;
