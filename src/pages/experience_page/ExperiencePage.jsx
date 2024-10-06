// React modules
// import { useContext } from "react";

// Context
// import { NavigationContext } from "../../contexts/NavigationContextProvider";

// Components

const ExperiencePage = () => {
  // const { resume_path } = useContext(NavigationContext);

  return (
    <>
      {/* <div style={{ height: "100vh" }}>
        <embed
          src={resume_path}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div> */}

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "141.4286%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGSXLukzNE/UWRUcsxU-9jl5FyFXfhaGA/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="Data_Analysis_Resume"
        />
      </div>
    </>
  );
};

export default ExperiencePage;
