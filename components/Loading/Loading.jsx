import React from "react";
import { styled } from "@mui/material/styles";
import lottie from "lottie-web";

const Loading1 = styled("div")({
  backgroundColor: `rgba(12, 46, 47, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100vw",
  height: "100vh",
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const AnimationWrapper = styled("div")({
  width: "90px",
  height: "100px",
});

function Loading(props) {
  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById("lottie-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/loading.json", // replace with path to animation data file
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <Loading1 className={props.className}>
      <AnimationWrapper>
        <div className="svg-container" id="lottie-container" />
      </AnimationWrapper>
    </Loading1>
  );
}

export default Loading;
