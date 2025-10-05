import React, { useEffect, useRef, useState } from "react";

const ScrollRevealAlternate = ({ children, index }) => {
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

  // Alternate directions based on index
  const direction = index % 2 === 0 ? "translateX(-50px)" : "translateX(50px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0) scale(1)" : `${direction} scale(0.95)`,
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealAlternate;
