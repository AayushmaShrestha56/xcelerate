import React, { useEffect, useRef, useState } from "react";

const ScrollRevealAdvanced = ({
  children,
  direction = "up", // "up", "down", "left", "right"
  distance = 50, // distance in px
  duration = 1.2, // seconds
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Determine initial transform based on direction
  let initialTransform = "";
  switch (direction) {
    case "up":
      initialTransform = `translateY(${distance}px) scale(0.95)`;
      break;
    case "down":
      initialTransform = `translateY(-${distance}px) scale(0.95)`;
      break;
    case "left":
      initialTransform = `translateX(${distance}px) scale(0.95)`;
      break;
    case "right":
      initialTransform = `translateX(-${distance}px) scale(0.95)`;
      break;
    default:
      initialTransform = `translateY(${distance}px) scale(0.95)`;
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0) scale(1)" : initialTransform,
        transition: `opacity ${duration}s ease, transform ${duration}s ease`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealAdvanced;
