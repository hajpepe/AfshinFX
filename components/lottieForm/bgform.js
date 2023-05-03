import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieAnimation({ path }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const options = {
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: path,
    };

    // Load the JSON animation
    const animation = lottie.loadAnimation(options);

    // Save a reference to the animation object
    animationRef.current = animation;

    // Clean up Lottie animation
    return () => {
      animation.destroy();
    }
  }, [path]);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // make the container behind the other elements
      }} 
    />
  );
}
