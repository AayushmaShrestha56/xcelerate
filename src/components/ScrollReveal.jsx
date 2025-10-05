import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 } // triggers when 20% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        filter: visible ? "blur(0px)" : "blur(10px)",
        transition:
          "opacity 1.2s ease, transform 1.2s ease, filter 1.3s ease",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
