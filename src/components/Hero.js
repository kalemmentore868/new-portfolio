import React from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [" Designer", " Developer", " Freelancer", " Software Engineer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container">
        <h1>Kalem Mentore</h1>
        <p>
          I'm a <span ref={el} className="typed"></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
