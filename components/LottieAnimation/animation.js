import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieAnimation({ path }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Load the JSON animation
    const animation = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: path,
    });

    // Save a reference to the animation object
    animationRef.current = animation;

    // Clean up Lottie animation
    return () => {
      animation.destroy();
    };
  }, [path]);

  // Handle mouse move event
  const handleMouseMove = (e) => {
    const animation = animationRef.current;

    // Calculate the progress of the animation based on the mouse position
    const progress = e.clientX / window.innerWidth;

    // Calculate the frame to display based on the progress
    const frame = Math.floor(progress * 23);

    // Set the animation to the calculated frame
    animation.goToAndStop(frame, true);
  };

  // Add event listener to handle mouse move
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="lottieanim" />;
}
